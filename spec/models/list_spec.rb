# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'モデルのテスト', type: :model do
  it "有効な投稿内容の場合は保存されるか" do
    expect(FactoryBot.build(:list)).to be_valid
  end
end