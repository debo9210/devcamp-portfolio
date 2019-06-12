class Portfolio < ApplicationRecord
  has_many :technologies, dependent: :destroy
  accepts_nested_attributes_for :technologies, 
                                reject_if: lambda {|attrs| attrs['name'].blank?}
  # has_one_attached :main_image
  # has_one_attached :thumb_image                               

  validates_presence_of :title, :body
  
  mount_uploader :thumb_image, PortfolioUploader
  mount_uploader :main_image, PortfolioUploader

  def self.angular
    where(subtitle: "Angular")
  end

  def self.by_position
    order("position ASC")
  end

  scope :angular, -> {where(subtitle: "Angular")}

end
