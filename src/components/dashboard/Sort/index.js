// Ant D
import { Select } from 'antd';

const index = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className='sort__dropdown'>
            <span className='color__light' style={{ marginRight : '10px' }}>Filter:</span>
            <Select
                defaultValue="Select"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    { value: 'Newest', label: 'Newest' },
                    { value: 'Old', label: 'Old' },
                ]}
            />

        </div>
    )
}

export default index