import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Dialog } from "@headlessui/react";

const VendorProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Office Chair", price: 45000, stock: 12 },
    { id: 2, name: "Shoe Rack", price: 25000, stock: 8 },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  const openModal = (product = null) => {
    setEditProduct(product);
    if (product) {
      setForm(product);
    } else {
      setForm({ name: "", price: "", stock: "" });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditProduct(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editProduct.id ? { ...form, id: p.id } : p))
      );
    } else {
      const newId = products.length + 1;
      setProducts((prev) => [...prev, { ...form, id: newId }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirm) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Your Products</h2>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-[#054C73] text-white px-4 py-2 rounded-lg hover:bg-[#043c5c]"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded-xl shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4">₦{product.price.toLocaleString()}</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => openModal(product)}
                    className="text-blue-600 hover:underline"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:underline"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <p className="text-center text-gray-500 py-10">No products yet.</p>
        )}
      </div>

      {/* Modal */}
      <Dialog open={modalOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl space-y-4">
            <Dialog.Title className="text-xl font-semibold">
              {editProduct ? "Edit Product" : "Add New Product"}
            </Dialog.Title>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full border rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Price (₦)
                </label>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: +e.target.value })}
                  required
                  className="w-full border rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Stock</label>
                <input
                  type="number"
                  value={form.stock}
                  onChange={(e) => setForm({ ...form, stock: +e.target.value })}
                  required
                  className="w-full border rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-[#054C73] text-white hover:bg-[#043c5c]"
                >
                  {editProduct ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default VendorProducts;
