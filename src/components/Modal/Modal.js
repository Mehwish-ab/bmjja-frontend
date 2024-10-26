import { Modal } from 'antd'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import close from '../../assets/icons/ic_tick.png'
import CustomModalStyle from './style'


const CustomModal = ({
    children,
    isModalVisible,
    setIsModalVisible,
    onCancel,
    width = '550px',
    showCloseBtn = true,
}) => {
    const handleCancel = () => {
        setIsModalVisible(false)
        if (onCancel) {
            onCancel()
        }
    }

    return (
        <Modal
            open={isModalVisible}
            footer={null}
            onCancel={handleCancel}
            centered={true}
            closable={false}
            width={width}
            className="position-relative"
        >
            <CustomModalStyle>
                {showCloseBtn && (
                    <img
                        className="close-icon"
                        onClick={handleCancel}
                        src={close}
                        alt="close"
                    />
                )}

                <div className="px-2">{children}</div>
            </CustomModalStyle>
        </Modal>
    )
}

export default CustomModal