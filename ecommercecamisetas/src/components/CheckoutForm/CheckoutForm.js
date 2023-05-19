import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleConfirm} className="m-4">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              className="form-control"
              type="text"
              id="phone"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mb-3">
            <button type="submit" className="btn btn-primary">
              Crear Orden
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
