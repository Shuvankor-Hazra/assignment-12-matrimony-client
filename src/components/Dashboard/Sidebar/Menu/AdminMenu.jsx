import { FaHome, FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { MdContacts, MdPreview } from 'react-icons/md'

const AdminMenu = () => {
    return (
        <>
            {/* Admin Dashboard */}
            <MenuItem label='Admin Dashboard' address='/dashboard' icon={FaHome} />

            {/* Manage Users */}
            <MenuItem label='Manage Users' address='manage-users' icon={FaUserCog} />

            {/* Approved Premium */}
            <MenuItem label={'Approved Premium'} address={'approved-premium'} icon={MdPreview} />

            {/* Approved Contact Request */}
            <MenuItem label={'Approved Contact Request'} address={'approved-contact-request'} icon={MdContacts} />
        </>
    )
}

export default AdminMenu