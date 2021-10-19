import React from "react";
import "./AdminHome.css";
export default function AdminHome() {
  return (
    <div style={{ display: "flex", "justify-content": "space-evenly","padding-top":"20px" }}>
      <div class="card bg-gradient-danger card-img-holder text-white">
        <div class="card-body">
          <img
            src="https://www.bootstrapdash.com/demo/purple-admin-free/assets/images/dashboard/circle.svg"
            class="card-img-absolute"
            alt="circle-image"
          />

          <h2 class="mb-5">Welcome</h2>
          <h4 class="card-text">Rikin D Chauhan</h4>
        </div>
      </div>
      <div class="card bg-gradient-info card-img-holder text-white">
        <div class="card-body">
          <img
            src="https://www.bootstrapdash.com/demo/purple-admin-free/assets/images/dashboard/circle.svg"
            class="card-img-absolute"
            alt="circle-image"
          />

          <h2 class="mb-5">Total cash deposited</h2>
          <h4 class="card-text">$55349857</h4>
        </div>
      </div>
      <div class="card bg-gradient-success card-img-holder text-white">
        <div class="card-body">
          <img
            src="https://www.bootstrapdash.com/demo/purple-admin-free/assets/images/dashboard/circle.svg"
            class="card-img-absolute"
            alt="circle-image"
          />

          <h2 class="mb-5">Total loans granted</h2>
          <h4 class="card-text">45666984</h4>
        </div>
      </div>
    </div>
  );
}
