import React from 'react'

import PropertyAdministratorMenu from 'components/layouts/AdminLayout/AdminMenu/PropertyAdministratorMenu'
import SuperAdminMenu from 'components/layouts/AdminLayout/AdminMenu/SuperAdminMenu'
import { useAuthedUser } from 'store/user/slice'
import { USER_ROLES } from 'types/User'

const AdminMenu = () => {
    const user = useAuthedUser()

    const renderMenu = () => {
        switch (user?.role) {
            case USER_ROLES.PROPERTY_ADMIN:
                return <PropertyAdministratorMenu />
            case USER_ROLES.SUPER_ADMIN:
                return <SuperAdminMenu />
            default:
                return null
        }
    }

    return renderMenu()
}

export default AdminMenu
