import { FaDatabase } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { BsViewList } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";


const GuestMenu = () => {
    return (
        <div>
            {/* Normal User Dashboard */}
            <MenuItem label={'Edit Biodata'} address={'/dashboard/edit-biodata'} icon={FaDatabase} />
            
            {/* View Biodata */}
            <MenuItem label={'View Biodata'} address={'view-biodata'} icon={BsViewList} />

            {/* My Contact Request */}
            <MenuItem label={'My Contact Request'} address={'my-contact-request'} icon={BiSolidContact} />

            {/* Favorites Biodata */}
            <MenuItem label={'Favorites Biodata'} address={'favorites-biodata'} icon={MdFavorite} />

        </div>
    );
};

export default GuestMenu;