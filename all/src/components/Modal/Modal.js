import { useState } from "react";
import classes from "./Modal.module.css";

const Modal = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<button
				onClick={() => {
					setOpen(true);
				}}
				className={classes.openModalBtn}
			>
				Открыть неанимированное модальное окно
			</button>
			{open && (
				<div className={classes.overlay}>
					<div className={classes.modal}>
						<span
							onClick={() => {
								setOpen(false);
							}}
							className={classes.closeModal}
						>
							X
						</span>
						<p>ds s</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
