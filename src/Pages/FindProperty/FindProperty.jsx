import { useState } from 'react';
import Cover from '../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProperty from '../../hooks/useProperty';
import PropertyTab from '../shared/PropertyTab/PropertyTab';
import { Helmet } from 'react-helmet-async';

const FindProperty = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [property] = useProperty();
    const family_house = property.filter(singleProperty => singleProperty.category === 'Family House');
    const family_sublet = property.filter(singleProperty => singleProperty.category === 'Family Sublet');
    const bachelor_mess = property.filter(singleProperty => singleProperty.category === 'Bachelor Mess');
    const spinster_mess = property.filter(singleProperty => singleProperty.category === 'Spinster Mess');
    const male_sublet = property.filter(singleProperty => singleProperty.category === 'Male Sublet');
    const female_sublet = property.filter(singleProperty => singleProperty.category === 'Female Sublet');
    const store = property.filter(singleProperty => singleProperty.category === 'Store');
    const warehouse = property.filter(singleProperty => singleProperty.category === 'Warehouse');
    return (
        <>
            <Helmet>
                <title>Rentopia | Find Property</title>
            </Helmet>
            <Cover></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="md:space-x-4 md:pl-36 mt-12">
                    <Tab className="tab tab-bordered bg-black text-white">Family House</Tab>
                    <Tab className="tab tab-bordered bg-black text-white">Family Sublet</Tab>
                    <Tab className="tab tab-bordered bg-black text-white">Bachelor Mess</Tab>
                    <Tab className="tab tab-bordered bg-black text-white">Spinster Mess</Tab>
                    <Tab className="tab tab-bordered bg-black text-white">Male Sublet</Tab>
                    <Tab className="tab tab-bordered bg-black text-white">Female Sublet</Tab>
                    <Tab className="tab tab-bordered bg-black text-white">Store</Tab>
                    <Tab className="tab tab-bordered bg-black text-white">Warehouse</Tab>
                </TabList>
                <TabPanel>
                    <PropertyTab property_category={family_house}></PropertyTab>
                </TabPanel>
                <TabPanel>
                    <PropertyTab property_category={family_sublet}></PropertyTab>
                </TabPanel>
                <TabPanel>
                    <PropertyTab property_category={bachelor_mess}></PropertyTab>
                </TabPanel>
                <TabPanel>
                    <PropertyTab property_category={spinster_mess}></PropertyTab>
                </TabPanel>
                <TabPanel>
                    <PropertyTab property_category={male_sublet}></PropertyTab>
                </TabPanel>
                <TabPanel>
                    <PropertyTab property_category={female_sublet}></PropertyTab>
                </TabPanel>
                <TabPanel>
                    <PropertyTab property_category={store}></PropertyTab>
                </TabPanel>
                <TabPanel>
                    <PropertyTab property_category={warehouse}></PropertyTab>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default FindProperty;