import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
function MyAccount() {
   return (
      <div className="my-container">
         <div className="my-row">
            <h2 className="s-title">My Account</h2>
         </div>
         <div className="my-row">
            <Tabs>
                <TabList>
                    <Tab>About me</Tab>
                    <Tab>Orders</Tab>
                    <Tab>Settings</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
         </div>
      </div>
   );
}

export default MyAccount;
