function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:black/25 transition-all">
      <div className="text-center ">
        <img src="/pizza.png" alt="pizza" className="max-h-24 block mx-auto" />
      </div>

      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        voluptatum molestiae obcaecati cupiditate asperiores .
      </p>
      <button className="bg-primary mt-4 text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}

export default MenuItem;
