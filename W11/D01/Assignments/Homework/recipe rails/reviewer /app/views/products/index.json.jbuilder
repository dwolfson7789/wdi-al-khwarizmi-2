json.products @products do |product|
  json.name product.name
  json.id product.id
  json.price number_to_currency product.price
  json.active product.active
  
end
