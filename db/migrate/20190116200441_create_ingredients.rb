class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :drink
      t.string :references
      t.string :description
      t.string :string

      t.timestamps
    end
  end
end