class User < ApplicationRecord
    has_secure_password

    before_save { self.first_name = first_name.titleize }
    before_save { self.last_name = last_name.titleize }
    before_save { self.email +=".com" unless email.end_with? (".com") }
    before_save { email.downcase! }
    
    validates :first_name, :last_name, :birthday, :phone_number, :address_line, :city, :state, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true, length: { minimum: 8 }

    validate :password_requirements

    private

    def password_requirements
        return if password.blank?

        unless password.match?(/[a-z]/)
            errors.add(:password, "must contain one lowercase letter")
        end

        unless password.match?(/[A-Z]/)
            errors.add(:password, "must contain one uppercase letter")
        end

        unless password.match?(/\d/)
            errors.add(:password, "must contain one digit")
        end

        unless password.match?(/[[:^alnum:]]/)
            errors.add(:password, "must contain one special character")
        end
    end

end
