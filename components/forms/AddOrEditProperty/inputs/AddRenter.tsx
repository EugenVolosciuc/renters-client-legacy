import React, { useState } from 'react'
import { Form, Input, Checkbox } from 'antd'
import { useTranslation } from 'react-i18next'

import { capitalize } from 'utils/string-manipulation'
import styles from 'components/forms/AddOrEditProperty/AddOrEditProperty.module.less'

const AddRenter = () => {
    const [showRenterInputs, setShowRenterInputs] = useState(false)
    const { t } = useTranslation()

    const renterInputsClassName = `${styles['renter-input']} ${showRenterInputs ? styles.show : ''}`

    const toggleShowRenterInputs = () => setShowRenterInputs(!showRenterInputs)

    return (
        <>
            <Form.Item name="addRenter" valuePropName="checked">
                <Checkbox onChange={toggleShowRenterInputs}>{t('add-property:add-renter')}</Checkbox>
            </Form.Item>
            <Form.Item
                name="renterName"
                label={t('add-property:name-surname')}
                className={renterInputsClassName}
                rules={showRenterInputs 
                    ? [{
                        required: true, 
                        message: t('add-property:name-required')
                    }] 
                    : undefined
                }
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="renterEmail"
                label={t('add-property:email')}
                className={renterInputsClassName}
                rules={showRenterInputs 
                    ? [{
                        required: true, 
                        message: t('add-property:email-required')
                    }] 
                    : undefined
                }
            >
                <Input />
            </Form.Item>
        </>
    )
}

export default AddRenter
