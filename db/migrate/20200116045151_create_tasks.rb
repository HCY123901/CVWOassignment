class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :text
      t.string :time
      t.string :location

      t.timestamps
    end
  end
end
