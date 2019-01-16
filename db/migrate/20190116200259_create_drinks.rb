class CreateDrinks < ActiveRecord::Migration[5.2]
  def change
    create_table :drinks do |t|
      t.string :title
      t.string :string
      t.string :description
      t.string :string
      t.string :steps
      t.string :string
      t.string :source
      t.string :string

      t.timestamps
    end
  end
end
