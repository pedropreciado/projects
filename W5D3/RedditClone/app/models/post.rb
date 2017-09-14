# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string
#  url        :string
#  content    :string
#  sub_id     :integer
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :content, presence: true

  belongs_to :sub

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
end
