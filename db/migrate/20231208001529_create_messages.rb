# frozen_string_literal: true

# db/migrate/20231208001529_create_messages.rb
class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :title
      t.string :text

      t.timestamps
    end
  end
end
