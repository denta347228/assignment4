import { useEffect, useState } from "react";
import "./currency.css";

export default function CurrencyComponent() {
  const [currencyData, setCurrencyData] = useState([]);
  const [jpyCurrency, setJpyCurrency] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const dataApi = await fetch(
        "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=d0ae92fabfbd438fa9095244668dc3d2"
      );
      const result = await dataApi.json();
      console.log("JPY Rate:", result.rates.JPY);

      setCurrencyData(result);
      setJpyCurrency(result.rates.JPY); // update JPY rate
    } catch (error) {
      console.log(error);
    }
  };

  const handleWeBuy = (input) => {
    const manipulateDiscount = input * 0.5;
    const result = Number(input) + Number(manipulateDiscount);
    return result.toFixed(2);
  };
  const handleWeSale = (input) => {
    const manipulateDiscount = input * 0.5;
    const result = Number(input) - Number(manipulateDiscount);
    return result.toFixed(2);
  };

  return (
    <>
      <div className="container p-5" style={{ height: "100vh" }}>
        <table className="table mb-4 table-warning">
          <thead>
            <tr>
              <th id="cekDenta" className="dentastyle" scope="col">
                #
              </th>
              <th className="dentastyle" scope="col">
                weBuy
              </th>
              <th className="dentastyle" scope="col">
                Exchangge Rate
              </th>
              <th className="dentastyle" scope="col">
                WeSale
              </th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "red" }}>
            <tr>
              <th className="dentastyle" scope="row">
                CAD
              </th>
              <td>{handleWeBuy(currencyData?.rates?.CAD)}</td>
              <td>{currencyData?.rates?.CAD}</td>
              <td>{handleWeSale(currencyData?.rates?.CAD)}</td>
            </tr>
            <tr>
              <th className="dentastyle" scope="row">
                IDR
              </th>
              <td>{handleWeBuy(currencyData?.rates?.IDR)}</td>
              <td>{currencyData?.rates?.JPY}</td>
              <td>{handleWeSale(currencyData?.rates?.IDR)}</td>
            </tr>
            <tr>
              <th className="dentastyle" scope="row">
                JPY
              </th>
              <td>{handleWeBuy(currencyData?.rates?.JPY)}</td>
              <td>{currencyData?.rates?.JPY}</td>
              <td>{handleWeSale(currencyData?.rates?.JPY)}</td>
            </tr>
            <tr>
              <th className="dentastyle" scope="row">
                CHF
              </th>
              <td>{handleWeBuy(currencyData?.rates?.CHF)}</td>
              <td>{currencyData?.rates?.CHF}</td>
              <td>{handleWeSale(currencyData?.rates?.CHF)}</td>
            </tr>
            <tr>
              <th className="dentastyle" scope="row">
                EUR
              </th>
              <td>{handleWeBuy(currencyData?.rates?.EUR)}</td>
              <td>{currencyData?.rates?.EUR}</td>
              <td>{handleWeSale(currencyData?.rates?.EUR)}</td>
            </tr>
            <tr>
              <th className="dentastyle" scope="row">
                USD
              </th>
              <td>{handleWeBuy(currencyData?.rates?.USD)}</td>
              <td>{currencyData?.rates?.USD}</td>
              <td>{handleWeSale(currencyData?.rates?.USD)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
