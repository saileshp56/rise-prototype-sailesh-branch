import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faPlus } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "reactstrap";
import { Card } from "reactstrap";
import { CardImg } from "reactstrap";
import { CardImgOverlay } from "reactstrap";
import { CardTitle } from "reactstrap";
import { CardText } from "reactstrap";

const Home = () => {
	return (
		<div style={{ marginLeft: " 120px" }}>
			<div className="searchBar">
				<form>
					<label className="sr-only" htmlFor="search"></label>
					<input
						type="text"
						placeholder="Say Something... "
						style={{ width: "500px" }}
						className="mb-4"></input>
				</form>
			</div>
			<div className="container d-flex justify-content-end">
				<div className="row"></div>
				<div className="col-sm" style={{ border: "1px solid black" }}>
					<div className="topBar">
						<div>
							<h3>Notification</h3>
						</div>
						<div
							className="icons"
							style={{ marginLeft: "60px", marginTop: "25px" }}>
							<FontAwesomeIcon className="iconN" icon={faSliders} />
							<FontAwesomeIcon className="iconN" icon={faPlus} />
						</div>
					</div>
					<Table borderless className="mr-4">
						<tbody>
							<tr>
								<td>
									Here Photos & Jessica, Brooke and other 7 peple have sent you
									messages
								</td>
							</tr>
							<tr>
								<td>
									Here Photos & Jessica, Brooke and other 7 peple have sent you
									messages
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div
					className="col-sm"
					style={{
						border: "1px solid black",
						marginLeft: "50px",
						marginRight: "20px"
					}}>
					<h3 style={{ textAlign: "left" }}>Verification</h3>
					<Table borderless>
						<tbody>
							<tr>
								<td style={{ textAlign: "left", paddingLeft: "35px" }}>
									0 Verification left
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>

			<div className="marketItem mt-4">
				<p className="text-secondary" style={{ textAlign: "right" }}>
					View All MarketPlace update >
				</p>
				<Card inverse style={{ width: "300px" }}>
					<CardImg
						alt="Card image cap"
						src="https://picsum.photos/318/270"
						width="20%"
					/>
					<CardImgOverlay>
						<div className="overlay">
							<CardTitle tag="h5">Card Title</CardTitle>
							<CardText>This is a wider</CardText>
						</div>
					</CardImgOverlay>
				</Card>
			</div>
		</div>
	);
};

export default Home;
