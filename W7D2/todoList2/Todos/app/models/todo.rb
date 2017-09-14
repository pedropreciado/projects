# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :string
#  done       :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ApplicationRecord
  validates :done, inclusion: { in: [true, false]}
  validates :body, :title, presence: true

end
