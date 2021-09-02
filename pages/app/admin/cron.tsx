import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { USER_ROLES } from 'types/User'
import AdminLayout from 'components/layouts/AdminLayout'
import { useAuthRedirect } from 'store/auth/useAuthRedirect'

const Cron = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    useAuthRedirect([USER_ROLES.SUPER_ADMIN])

    return (
        <AdminLayout header={{ title: 'Cron jobs' }}>
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

export default Cron