import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { USER_ROLES } from 'types/User'
import AdminLayout from 'components/layouts/AdminLayout'

const Dashboard = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <AdminLayout 
            header={{ title: 'Dashboard' }}
            allowedUsersSetting={[USER_ROLES.SUPER_ADMIN]}
        >
            <p>Admin dashboard</p>
        </AdminLayout>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { locale } = context

    return {
        props: {
            ...(await serverSideTranslations(
                locale as string,
                ['common']
            ))
        }
    }
}

export default Dashboard