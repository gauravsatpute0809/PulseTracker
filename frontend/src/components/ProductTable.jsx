function ProductTable() {
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      category: "Laptop",
      price: "$1,299",
      stock: 24,
      status: "Active",
    },
    {
      id: 2,
      name: "iPhone 16",
      category: "Mobile",
      price: "$999",
      stock: 12,
      status: "Active",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      category: "Accessory",
      price: "$120",
      stock: 54,
      status: "Active",
    },
    {
      id: 4,
      name: "Gaming Monitor",
      category: "Display",
      price: "$430",
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 5,
      name: "Wireless Mouse",
      category: "Accessory",
      price: "$55",
      stock: 80,
      status: "Active",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-3">Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="py-4 font-semibold">{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;