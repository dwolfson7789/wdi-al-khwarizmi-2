class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  #get one product
  def show
    @product = Product.find(params[:id])
  end

  #post to create product
  def create
    @product = Product.new( name: params[:name], price: params[:price], active: params[:active])

    if @product.save
      render 'show', formats: [:json], handlers: [:jbuilder], status: 201
    else
      render json: { error: "there was an error dood" }, status: 422
    end




  #PUT HAS A SPECIAL NAME CALLED UPDATE!
#PUT

      # def update
      #   if @product.update [:json], handlers: [:jbuilder], status: 200
      #   else
      #     render json: { error: "Product could not be updated." }, status: 422
      #   end
      # end


#DELETE
  def destroy
    if @product.destroy
        render json: {}, status: 201
    else
        render json: { error: "Product could not be deleted." }, status: 422
      end
  end
end



  #DELETE

end


# class ProductsController < ApplicationController
#     def index
#       # this will be a drawing of all of our products from out database
#       @products = Product.all
#     end
#
# # get one product
#     def show
#
#       @product = Product.find(params[:id])
#
#     end
#
# # POST TO CREATE A PRODUCT
# def create
#     @product = Product.new(:name params [:name], price: params [:price], active: params [:active])
# # built in method
#     if @product.save
# # rendering the show memthod above this prepareS THIS METHOD TO GET A SINGLE ID
# # respond with json as format
#       render 'show' formats: [:json], handlers: [:jbuilder], status:201
#     else
#       render json {error: "Product could not be created."}, status:422
#   end
# end
# end
