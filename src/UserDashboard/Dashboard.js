
import React from "react";
import { ProfileForm } from "./ProfileForm";
import { PaymentOptionsForm } from "./PaymentOptionsForm";
import { ManageProfileForm } from "./ManageProfileForm";
import { MyOrdersForm } from "./MyOrdersForm";
import {AddressBookForm} from "./AddressBookForm"
import { Asidebar } from "./Asidebar";
// import Sidebar from "./Asidebar"
const Dashboard = () => (
    <div className="container-fluid">
      <div className="row">
     <Asidebar></Asidebar>
        <main className="col-md-9 col-12 dashboard p-4">
          <div className="content p-3 rounded shadow" id="formGroup">
            <ProfileForm />
            <ManageProfileForm />
            <AddressBookForm />
            <PaymentOptionsForm />
            <MyOrdersForm />
          </div>
        </main>
      </div>
    </div>
  );
  
  export default Dashboard;
  