import { Modal } from "antd";
import React, {useState} from "react";

function ConfirmModal({ id, open}) {

    // const [open, setOpen] = useState(true);


    function handleOkModal() {
        console.lo('teste1');
    }

    function handleCancelModal() {
        console.lo('teste2');
    }

    <Modal title="titulo" open={open} onOk={() => handleOkModal()} onCancel={handleCancelModal}>
        <p>Deseja realmente excluir esse registro?</p>
    </Modal>
}

export default ConfirmModal;