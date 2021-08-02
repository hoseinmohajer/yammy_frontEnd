import React from "react";
import Image from "next/image";

const Client = () => {
  return (
    <div className="Client">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title">
              <i>
                <Image src="/images/title.png" alt="Our Blog" width={62} height={50} layout='intrinsic'/>
              </i>
              <h2>Our Client</h2>
            </div>
          </div>
        </div>
        <div className="row flex-row">
          <div className="col-md-4">
            <div className="Client_box">
              <Image src="/images/client.jpg" alt="client" width={226} height={206} layout='intrinsic' />
              <h3>Roock Due</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour.</p>
              <i>
                <Image src="/images/client_icon.png" alt="#" width={34} height={28} layout='intrinsic' />
              </i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Client_box">
              <Image src="/images/client.jpg" alt="client" width={226} height={206} layout='intrinsic' />
              <h3>Roock Due</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour.</p>
              <i>
                <Image src="/images/client_icon.png" alt="#" width={34} height={28} layout='intrinsic' />
              </i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Client_box">
              <Image src="/images/client.jpg" alt="client" width={226} height={206} layout='intrinsic' />
              <h3>Roock Due</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour.</p>
              <i>
                <Image src="/images/client_icon.png" alt="#" width={34} height={28} layout='intrinsic' />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
