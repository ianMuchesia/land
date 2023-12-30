import { typeProperties } from '@/@types/@types';
import { Phone, SMS, Whatsapp } from '@/components/Modals';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'
interface Props {
    property: typeProperties;
}
const ModalComponent = ({ property }: Props) => {
    const [modalState, setModalState] = useState({
        isPhone: false,
        isSMS: false,
        isWhatsapp: false,
    });

    return (
        <div className="mt-6 flex items-center gap-8 text-xs" onClick={(e)=>{e.preventDefault()}}>
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2" onClick={() => setModalState((prev) => ({ ...prev, isPhone: true }))}>
                <Icon
                    icon="solar:phone-outline"
                    className="h-4 w-4 text-green-800"
                />
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                onClick={() => setModalState((prev) => ({ ...prev, isSMS: true }))}
            >
                <Icon icon="ic:outline-sms" className="h-4 w-4 text-green-800"

                />
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                onClick={() => setModalState((prev) => ({ ...prev, isWhatsapp: true }))}>
                <Icon
                    icon="dashicons:whatsapp"
                    className="h-4 w-4 text-green-800"
                />
            </div>
            <div className="">
                {modalState.isPhone && <Phone property={property} setModalState={setModalState} />}
                {modalState.isSMS && <SMS property={property} setModalState={setModalState} />}
                {modalState.isWhatsapp && <Whatsapp property={property} setModalState={setModalState} />}
            </div>
        </div>
    )
}

export default ModalComponent