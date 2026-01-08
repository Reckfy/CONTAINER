import './QRModal.scss';

function QRModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="qr-overlay" 
        onClick={onClose}
        aria-label="Закрыть QR-код"
      />
      <div className="qr-modal">
        <img 
          className="qr-image" 
          src="/images/qr-wechat.jpg" 
          alt="QR код WeChat" 
        />
      </div>
    </>
  );
}

export default QRModal;