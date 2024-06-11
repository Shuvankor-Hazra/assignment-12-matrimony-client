/* eslint-disable react/prop-types */

const MyContactRequestTableRow = ({ item }) => {
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.bioDataId}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative capitalize'>{item.status}</span>
                </button>

            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full '
                    ></span>
                    {
                        item.status !== 'pending' ?
                        <span className='relative capitalize'>{item?.mobileNumber}</span> :
                        "Loading..."
                    }
                </span>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full '
                    ></span>
                    {
                        item.status !== 'pending' ?
                        <span className='relative capitalize'>{item?.email}</span> :
                        "Loading..."
                    }
                </span>
            </td>
        </tr>
    );
};

export default MyContactRequestTableRow;