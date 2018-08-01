const BuyTicket = () => (
  <div className="buy-ticket-wrapper">
    <Style />
    <a
      href="https://ti.to/cluj-javascripters/jsheroes-2019"
      className="header-btn header-btn-left float-right"
      rel="noopener noreferrer"
    >
      Buy Your Ticket
    </a>
  </div>
);

const Style = () => (
  <style jsx>
    {`
      .buy-ticket-wrapper {
        display: flex;
        flex: 1;
        justify-content: center;
      }
      .header-btn-left {
        background-color: rgba(0, 152, 255, 0.8);
        padding: 10px 30px;
        color: #fff;
        border: 2px solid #0098ff;
        transition: all 0.5s;
        text-decoration: none;
        cursor: pointer;
        margin-top: 80px;
        border-radius: 4px;
        font-size: 20px;
      }
      .header-btn-left:hover {
        background-color: #0098ff;
        border: 2px solid #fff;
        transition: all 0.5s;
      }

      .buy-ticket-wrapper .text {
      }
    `}
  </style>
);

export default BuyTicket;
