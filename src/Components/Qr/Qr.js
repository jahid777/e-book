import React, { useState, useRef } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Qr.css";

const Qr = () => {
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [display, setDisply] = useState(false);
  const history = useHistory();

  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  const data = "FvjfsmsvVsbHsbJsban";
  if (scanResultWebCam == data) {
    history.push("/home");
  }
  return (
    <div>
      <div className="qr-main-section row container-fluid">
        {display && (
          <div className="col-md-3">
            <QrReader
              delay={300}
              style={{ width: "100%" }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
          </div>
        )}
      </div>
      <div className="scen-button">
        <button
          className="btn btn-primary mt-5"
          onClick={() => setDisply(!display)}
        >
          SCEN BY QR CODE{" "}
        </button>
      </div>
    </div>
  );
};

export default Qr;

// import React, { useState, useRef } from "react";
// import {
//   Container,
//   Card,
//   CardContent,
//   makeStyles,
//   Grid,
// } from "@material-ui/core";
// import QrReader from "react-qr-reader";

// const Qr = () => {
//   const [scanResultWebCam, setScanResultWebCam] = useState("");
//   const classes = useStyles();
//   const qrRef = useRef(null);

//   const handleErrorWebCam = (error) => {
//     console.log(error);
//   };
//   const handleScanWebCam = (result) => {
//     if (result) {
//       setScanResultWebCam(result);
//     }
//   };
//   return (
//     <Container className={classes.conatiner}>
//       <Card>
//         <h2 className={classes.title}>Ebook</h2>
//         <CardContent>
//           <Grid container spacing={2}>
//             <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
//               <h3>Qr Code Scan by Web Cam to Open Ebook</h3>
//               <QrReader
//                 delay={300}
//                 style={{ width: "100%" }}
//                 onError={handleErrorWebCam}
//                 onScan={handleScanWebCam}
//               />
//               <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// const useStyles = makeStyles((theme) => ({
//   conatiner: {
//     marginTop: 10,
//   },
//   title: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#3f51b5",
//     color: "#fff",
//     padding: 20,
//   },
//   btn: {
//     marginTop: 10,
//     marginBottom: 20,
//   },
// }));

// export default Qr;
