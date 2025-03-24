import React from "react";
import Image from "next/image";
import PaymentQr from "@/public/payment_qr.png";
import PdfIcon from "@/public/pdf_icon.svg";
import QRCode from "react-qr-code";

const Education = () => {
  return (
    <div className="flex flex-col gap-[48px] mb-5">
      <span className="text-black text-[18px] font-[700] max-w-[50%]">
        Для выбора оплаты образовательных услуг с помощью банковской карты
        необходимо отсканировать QR-код:
      </span>
      <div className="flex gap-[18px]">
        <div className="w-full rounded-[30px]">
          <QRCode
            value="https://secure-edu.specialpayments.ru/init?currency=RUB&endpoint_id=01936d17-d47f-92a9-c90a-4e49a8780dc4&merchant_id=01936cfe-3c96-39ce-9d17-fd9fc9f3c59b&order=__generate__&signature=Ea8ip71FpaQHPfCsLq-pTdx9VDYyEGxpSs2NtsbruHk"
            className="min-w-[375px] max-h-[375px] bg-white p-[20px] rounded-[15px] w-full h-full"
          />
        </div>
        <div className="flex flex-col text-black text-[18px] font-[400] gap-[64px] px-[16px]">
          <div className="flex flex-col gap-[24px] text-justify">
            <span>
              Оплата происходит через ООО «СПЕЦИАЛЬНЫЕ ПЛАТЕЖНЫЕ РЕШЕНИЯ» с
              использованием банковских карт следующих платежных систем:
              <br />
              <span className="font-[700]">&middot;</span> МИР
              <br />
              <span className="font-[700]">&middot;</span> VISA International
              <br />
              <span className="font-[700]">&middot;</span> Mastercard Worldwide
              <br />
              <span className="font-[700]">&middot;</span> JCB
              <br />
            </span>
            <span>
              Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены
              на платежный шлюз ООО «СПЕЦИАЛЬНЫЕ ПЛАТЕЖНЫЕ РЕШЕНИЯ». Соединение
              с платежным шлюзом и передача информации осуществляется в
              защищенном режиме с использованием протокола шифрования SSL. В
              случае если Ваш банк поддерживает технологию безопасного
              проведения интернет-платежей Verified By Visa, MasterCard
              SecureCode, MIR Accept, J-Secure, для проведения платежа также
              может потребоваться ввод специального пароля.
            </span>
            <span>
              Настоящий сайт поддерживает 256-битное шифрование.
              Конфиденциальность сообщаемой персональной информации
              обеспечивается ООО «СПЕЦИАЛЬНЫЕ ПЛАТЕЖНЫЕ РЕШЕНИЯ». Введенная
              информация не будет предоставлена третьим лицам за исключением
              случаев, предусмотренных законодательством РФ. Проведение платежей
              по банковским картам осуществляется в строгом соответствии с
              требованиями платежных систем МИР, Visa Int., MasterCard Europe
              Sprl, JCB.
            </span>
          </div>
          <div className="flex flex-col gap-[16px] p-[24px] bg-[#ecebff] rounded-[10px]">
            <span className="text-[18px] font-[700]">Что делать, если возникли проблемы при оплате услуг:</span>
            <div className="flex py-[16px] px-[24px] bg-white rounded-[10px] gap-[16px]">
              <Image src={PdfIcon} alt="" />
              <div className="flex flex-col">
                <a href="#" className="text-[18px] font-[500] hover:underline">Инструкция</a>
                <small className="text-[#b0b1b6] text-[18px] font-[400]">600.9 КБ</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
