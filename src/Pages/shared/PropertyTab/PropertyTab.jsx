import PropertyCard from '../PropertyCard/PropertyCard';

const PropertyTab = ({property_category}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                property_category.map(propertyItem => <PropertyCard
                    key={propertyItem._id}
                    propertyItem={propertyItem}
                ></PropertyCard>)
            }
        </div>
    );
};

export default PropertyTab;