# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  AVAILABLE_COLORS = %w(black white orange tuxedo tiger-striped calico)

  validates :birth_date, presence: true
  validate :cant_be_born_in_future
  validates :name, presence: true
  validates :color, presence: true, inclusion: { in: AVAILABLE_COLORS,
    message: '%{value} is not a valid color'}
  validates :sex, presence: true, length: { maximum: 1 }
  validates :description, presence: true

  def age
    time_ago_in_words(birth_date)
  end

  private

  def cant_be_born_in_future
    if birth_date.to_time > Time.now
      errors[:birth_date] << "can\'t be in the future!"
    end
  end
end
