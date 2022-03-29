import React from "react";

const Research = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">Research</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">Indoor Positioning System (IPS)</div>
        <div className="text">
          <p>
            Indoor positioning has been a exciting branch of{" "}
            <a href="https://en.wikipedia.org/wiki/Positioning_system">
              Positioning Systems
            </a>
            . It utilizes a combination of devices and softwares to acheive
            positioning of objects or people where GPS and other technologies
            fails (usually indoors). This is the case in our scenario for three
            reasons:
          </p>
          <ul>
            <li>
              Hospitals have multiple floors overlapping, GPS and satellite
              technologies can only retrieve longitudinal and latitudinal data.
              Therefore, it cannot unambiguously identify rooms in the hospital.
            </li>
            <li>
              The distance between rooms are usually very small compared to the
              marginal error of GPS.
            </li>
            <li>
              Signals are not always available in varying parts of building.
            </li>
          </ul>
          <p>
            Therefore, our system will not rely upon GPS technologies, but other
            IPS approaches instead. Currently, there are a large variety of
            strategies that IPS can depend on. We will be discussing some of
            them below and analysing their advantages, applications, and how
            well they can adapt to our scenario.
          </p>
          <div className="case">Wifi Positioning System (WPS)</div>

          <p>
            <img src="images/tri.png" alt="" />
            The Wi-Fi-based positioning system is a typical localisation
            strategy deployed indoors where multiple wifi access points surround
            the target area. An approach WPS uses Received Signal Strength (RSS)
            and "Fingerprinting" to measure the distance from wireless access
            points. RSS is based on measuring the signal strength from a client
            to multiple access points. With trilateration (or multilateration
            depending on the setup), the approximated distance from RSS and the
            location of the access points can be used to predict the patient's
            location. Fingerprinting is an RSS-based technique that records
            signal strength at various positions in the targeted area, reducing
            the error caused by the environment's obstructions like a wall.
            <br />
            <br />
            The Wi-Fi-based positioning system is usually cheap to implement in
            urban areas where access points are abundant, and people carry
            mobile devices that serve as client devices. However, it also has
            many disadvantages. For example, RSS is wildly inaccurate because
            signal strength has an inverse exponential growth. A marginal error
            in signal strength at a different distance may result in drastically
            different position variations. Fingerprinting means that moving
            furniture around would require resampling of the target area, making
            it not ideal for places with moving objects. In our scenario, we
            expect medical beds, equipment, and large objects to be moved
            frequently through the hospital, making resampling a tedious task.
            <br />
            <br />
            <img src="images/Aoa.png" alt="" />
            There are also more complex approaches with WPS. These include Angle
            of Arrival (AoA) and Road Trip Time (RTT). AoA requires interfaces
            with an array of antennas. These antennas could then be used to
            triangulate the client device. This strategy is usually more
            accurate than other Wi-Fi-based approaches; However, it is only
            possible with specific equipment and enough antennas. We are looking
            for an easily adaptable and versatile solution that could work
            throughout many different hospitals; thus, AoA will not be
            considered. RTT uses the time between travel to approximate the
            distance of the client. The granularity of the time measurement is
            too low to be accurate and versatile, and similar to AoA, has not
            been considered.
            <br />
            <br />
            After some research, we decided not to proceed with WPS because of
            sacrifices in either accuracy or versatility.
          </p>
          <div className="case">Ultra Wide-Band System (UWB)</div>
          <p>
            UWB is one of the best solutions to IPS, utilizing a broad spectrum
            of radio waves, readers, and transmitter tags to achieve
            localization. UWB works by measuring precise Road Trip Time (RTT).
            Unlike wifi-based approaches, UWB's RTT can be measured
            exceptionally accurately because measuring the RTT of radio waves is
            a function of bandwidth. As a result, the margin of error for UWB
            systems usually range between centimetres, a significant benefit
            over wifi-based and Bluetooth approaches.
            <br />
            <br />
            UWB is currently used in many applications such as amazon warehouse
            item tracking. UWB has allowed Amazon's employees to quickly and
            accurately find the required stock. However, UWB is not always the
            best solution. UWB comes at a very high cost, usually at 5 to 10
            times to cost other approaches offer. UWB also require precise and
            costly installations. The UWB reader needs to be anchored at exact
            locations for the data to be accurate, most of them also needing
            cable connections to keep them in sync.
            <br />
            <br />
            For our purpose, UWB's benefits are largely unnecessary. For
            example, staffs never need to know the exact coordinates of a
            patient's location, nor would that data be helpful for analytics
            compared to analytics of other approaches. UWB can also not be
            easily deployed because of its technical requirements and price.
            Lastly, dispite the increase of UWB in storage tracking, there has
            been minimal to no real world application of UWB in hospitals.
            Therefore, we imagine that UWB's negatives out-weights the positives
            in a deployed scenario, and we will be using an alternative
            approach.
          </p>
          <div className="case">QR Codes and RFID</div>
          <p>
            <img src="images/scanner.jpg" alt="" />
            QR Codes and RFID has long been cheap and reliable way of tracking
            people. They are used in many real-world applications like the NHS
            COVID-19 tracking service. They usually operate in two ways,
            reader-based system and reference point-based system. A reader based
            system uses scanners or sensors placed at specific locations to
            detect inexpensive tags and codes. This operation scheme is better
            when the area is limited, such as amusement parks and hospitals. A
            reference point-based system would have tags or QR codes located in
            a particular area where people carrying scanners or sensors could
            record. This is preferable when the locations may grow, change, and
            vary like the shops which serve the NHS COVID-19 QR codes.
            <br />
            <br />
            RFID and QR codes also have their pros and cons. RFID is usually
            used when the task has a higher focus on security and a requirement
            of not being easily duplicatable (hence why it's often in access
            control). It is simple, convenient, and secure. On the other hand,
            QR codes are used more because of accessibility, contactless, and
            versatility. For example, QR code boarding passes allows the users
            to both print them out or kept on their phones. This allows for
            better reliability of the system.
            <br />
            <br />
            Our final decision was to use QR codes for the IPS of hospitals. It
            offers reliability, versatility, and cost for involving a minimal
            degree of human interaction. It also avoids the need of ethical
            clearance since scanning is not nessasarily compulsory.
          </p>
          <div className="case">Other Approaches</div>
          <p>
            We have evaluated some other choices, which we didn't have the
            opportunity to fully explain here. A breif overview is listed below.
          </p>
          <ul>
            <li>
              Bluetooth Proximity Based System: A very close choice since it did
              not need human interaction. We end up not choosing it because it
              is very similar to the QR code approach but might need ethical
              clearence.
            </li>
            <li>
              Infrared (IR): Require extensive equiptment and ethical clearance.
            </li>
            <li>
              Camera: An approach which would be very interesting. Acheivable
              similar to amazon fresh offline shops. Required ethical clearance.
            </li>
            <li>
              Ultrasound: Unknown risk in hospital enviornments. Have the risk
              of causing minor interference.
            </li>
          </ul>
        </div>
      </div>

      <div className="content-block">
        <div className="subtitle">Technology</div>
        <div className="text">
          <p></p>
          <div className="case">Mobile App Scanner</div>
          <p>
            The scanner app is a proof-of-concept (PoC) placeholder for the actual wall-mounted scanners that scans patients’ QR codes. This mobile app is to be used by as many users as possible, hence it has to be cross-platform. We also have to consider the amount of time and resources that we have, and developing a full native app will most likely not be possible, which leads to the idea of building a hybrid app. The next part discusses the costs and benefits between hybrid and native app building, and tries to conclude that a hybrid app is the right choice for us. Moving on to the app development itself, there are mainly 2 options: React Native, developed by Facebook in 2015, and Flutter, developed by Google in 2018. We will do a simple comparison between the 2 different tools, before coming to a conclusion that using Flutter to develop a mobile scanner app that simulates the scanners in an actual implementation is the best option.
          </p>
          <div className="case">Comparison (Hybrid vs Native app)</div>
          <p>
            A native app is a software application built in a specific programming language, for the specific device platform, either iOS or Android[10], or both in the case of cross-platform. In this case, a native app is able to work offline, and offer a faster, more reliable and more responsive experience to users. However, native app development is more expensive and takes more time. We will discuss other factors in the section below when we compare between native, hybrid and web apps.
            <br />
            <br />
            Meanwhile, a hybrid app is installed like a native app, but it runs as a web app built with JavaScript, HTML, and CSS, and runs in a simplified browser in the app, called webview. Hybrid apps are easier to build, and take less time and resources, but suffer on performance as they are bottlenecked by the webview, which is responsible for the UI and JavaScript code.
            <br />
            <br />
            As mentioned, the mobile scanner is a proof of concept, and we are not using an app in actual implementation, hence we want the option that is the fastest and cheapest to build. We chose to build a hybrid app.
          </p>
          <div className="case">Comparison (Flutter vs React Native)</div>
          <p>
            React Native is an open-source mobile application framework that uses JavaScript,
            and uses the same design as React[11]. It has great stability due to being out on the
            market for about 7 years, has many successful and prominent apps, and is backed
            by a vast community. On the other hand, Flutter is a portable UI toolkit for
            constructing apps using a single codebase, and uses Dart as its programming language.
            While the downsides include having to learn Dart, a rather uncommon language,
            Flutter apps are typically developed faster than React Native apps. Flutter also
            has a rapidly growing community and popularity, which translates to strong support.
            <br />
            <br />
            For the sake of this project, since we are only aiming to build a PoC scanner app,
            we will be going with the faster and more efficient option, and that is Flutter.
          </p>
          <div className="case">Client Frontend</div>
          <p>
            Our client frontend is the front-facing end of the system, and thus every user
            will be interacting with it to access all the functionalities that our system
            provides. We will discuss what the best approach to develop our frontend is, and
            attempt to conclude that building a website is the most sensible method. Furthermore,
            we will also go into comparisons between the different development frameworks for a
            website, and end off with choosing ReactJS as our framework.
          </p>
          <div className="case">Comparison (Native vs Web vs Hybrid)</div>
          <p>
            We can develop our client application in 3 ways: native app, hybrid app, or web app. A native app is able to work offline, and provides more speed and functionalities as they have more access to system resources. However, they are more costly, as they have to be designed and built from scratch to accommodate different platforms and to maintain after deployment.[12]
            <br />
            <br />
            Web apps boast ease of development and maintenance, and they do not need to be downloaded - they function on browsers, which puts web apps as the cheapest to build. The shortfalls are that they do not work offline, have fewer features, and execute functions slower than mobile apps.
            <br />
            <br />
            Hybrid apps, as mentioned in the previous comparison, are a mix of both web and native apps. They are able to fully utilise the devices’ resources as they are installed like a native app, while also cheaper to build as they actually run on webviews. But, they have performance issues as they are reliant on the webview to display their functionalities.
            <br />
            <br />
            Our application needs to be used by the entire staff within the hospital, which also means we have to select the approach with the highest user coverage, using the least amount of resources. A web app is the cheapest and is the fastest to build, and considering the short amount of time we have, we decided to go with a web app.

          </p>
          <div className="case">Comparison (Web app frameworks - Angular, React, Vue)</div>
          <p>
            There are 3 main frameworks we can choose from: Angular, React, or Vue.[13]
            <br />
            <br />
            Angular, developed by Google in 2010, is the oldest of the 3 and has a complete
            package, meaning most functionalities like state management and routing are in-built
            libraries. However, the concepts of development are more unconventional, which proves
            difficult to learn at the start.
            <br />
            <br />
            React, developed by Facebook in 2013, has gained acceptance and support from a large
            part of the developer community, and is able to integrate well with other frameworks.
            It is a framework that is easy to learn and has great flexibility. However, while it
            maintains a small core library, it needs to import multiple external libraries to
            encompass most functionalities for a working app.
            <br />
            <br />
            Vue, developed in 2014, is the newest of the lot, and does not have the backing of a
            major company. Most of its support comes from open-source communities and developers,
            and it has recently gained popularity with its newest release. It boasts a high level
            of simplicity and flexibility, and is widely considered the easiest to learn out of
            the 3. On the flipside, it has the same issue that React has, and needs 3rd-party
            libraries to fully create a working app.
            <br />
            <br />
            Our team have had experience in building React apps before, and are familiar with the libraries that are needed for an app such as this. Despite the fact that React is not the easiest framework to learn, its ease of integration with other frameworks makes up for it, hence we have decided to go with it. We believe in the short few months of time that we have to develop a system that is rather complex, we want to use a framework that we are familiar and comfortable working with.
          </p>
          <div className="case">Server and Backend</div>
          <p>
            Our intended system works by sending data from the QR codes that are scanned at each
            room to the database. The client frontend then sends API requests to the backend
            which pulls specific data from the database. This data is then shown on the client
            frontend. As such, we have to select a reliable cloud database that simulates the
            actual servers when implemented, and for using sample databases for development
            and testing purposes. We will discuss the types of server-side frameworks and
            databases, and explain our decisions on using NodeJS and MongoDB.
          </p>
          <div className="case">Comparison (Server-side frameworks - Django vs ExpressJS + NodeJS)</div>
          <p>
            Django[15] is a high-level Python web framework that allows rapid development to facilitate web developers in building applications quickly. It provides better performance due to an inbuilt template system and has better cost-efficiency due to being more dynamic.
            <br />
            <br />
            ExpressJS[16] is a backend web app framework for NodeJS, and is a layer developed on top of NodeJS that aids administering routes and the server. NodeJS is a JavaScript runtime environment that caters to structuring backend and server side development. While it suffers from lower performance and being less cost-effective, NodeJS is by far the most efficient and productive as it is the only server-side framework that uses JavaScript. This thus gives the entire development all the pros of full stack JavaScript development, such as code sharing and reuse, and increased speed and performance. This consequently provides us with more time for other parts of development, while at the same time building it quickly and reliably. Hence, we chose NodeJS.
          </p>
          <div className="case">Comparison (Databases - NoSQL (MongoDB) vs SQL)</div>
          <p>
            NoSQL are document databases that operate as non-relational and unstructured databases.[17] In MongoDB, a NoSQL database, individual information is stored as documents which are collections of fields, known as JSON files, and allow for dynamic data processing and more flexibility as each collection need not have the same set of fields. It also allows for horizontal scaling, by means of adding more servers and expanding storage. Time series collections are present in MongoDB which stores sequences of measurements over a period of time, which increases query efficiency.
            <br />
            <br />
            SQL databases, on the contrary, are typical relational databases. Data is
            stored in rows within a table, which benefits a system that requests for
            common characteristics, but is limited in terms of storage of hierarchical
            data. SQL databases also facilitate vertical scaling, making it easier to
            add functionalities to the system.
            <br />
            <br />
            Our system is one that needs to pull data from patients dynamically and
            efficiently. We also need to pick one that is the most similar to the
            actual servers used when implemented, and is easily extendable. Hence,
            we chose MongoDB as our database.

          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Summary</div>
        <div className="text">
          <p>
            After doing ample research for methods to determine patients’ locations in the hospital, we have decided to go with QR codes. To build the system, we have come up with the following tech stack:
          </p>
          <ul>
            <li>Mobile Scanner App: Hybrid Flutter App</li>
            <li>Client Frontend website: ReactJS Web App</li>
            <li>Backend and Database: ExpressJS + NodeJS + MongoDB</li>
          </ul>
          <div className="case">References</div>
          <ol>
            <li>
              Smart Indoor Positioning/Location and Navigation: A Lightweight
              Approach. (n.d.). Retrieved March 27, 2022, from
              https://core.ac.uk/download/pdf/287123645.pdf{" "}
            </li>
            <li>
              Indoor Location Detection using Wifi | Marko Tisler | Wlpc Eu
              Budapest 2016. (2017). YouTube. Retrieved March 27, 2022, from
              https://youtu.be/vtfnlgTj_-A.{" "}
            </li>
            <li>
              {
                "Wikimedia Foundation. (2022, March 12). Indoor Positioning System. Wikipedia. Retrieved March 27, 2022, from https://en.wikipedia.org/wiki/Indoor_positioning_system "
              }
              "
            </li>
            <li>
              Ray, B. (n.d.). Indoor positioning systems &amp; Location
              Tracking: Link Labs. Indoor Positioning Systems &amp; Location
              Tracking | Link Labs. Retrieved March 27, 2022, from
              https://www.link-labs.com/blog/indoor-positioning-system{" "}
            </li>
            <li>
              Jenkins, M. (n.d.). An Examination of Ultra-Wideband (UWB) for
              Positioning &amp; Location Tracking: Blog: Link labs. Blog | Link
              Labs. Retrieved March 27, 2022, from
              https://www.link-labs.com/blog/ultra-wideband-positioning-location-tracking{" "}
            </li>
            <li>
              6 differences between RFID tags and QR codes (simple guide).
              Nortech Control Blog. (n.d.). Retrieved March 27, 2022, from
              https://blog.nortechcontrol.com/rfid-tags-vs-qr-codes{" "}
            </li>
            <li>
              Experimental Evaluation of Precision of a Proximity-based Indoor
              Positioning System. (n.d.). Retrieved March 27, 2022, from
              https://www.diva-portal.org/smash/get/diva2:1333451/FULLTEXT01.pdf
            </li>
            <li>
              How does ultra-wideband work? Samsung Business Insights. (2021,
              September 24). Retrieved March 27, 2022, from
              https://insights.samsung.com/2021/08/25/what-is-ultra-wideband-and-how-does-it-work-3/{" "}
            </li>
            <li>
              F. Höflinger et al., "Acoustic indoor-localization system for
              smart phones," 2014 IEEE 11th International Multi-Conference on
              Systems, Signals & Devices (SSD14), 2014, pp. 1-4, doi:
              10.1109/SSD.2014.6808774.
            </li>
            <li>
              [10]"Native, Web or Hybrid Apps? What's The Difference?", MobiLoud, 2022. [Online]. Available: https://www.mobiloud.com/blog/native-web-or-hybrid-apps. [Accessed: 29- Mar- 2022].            </li>
            <li>
              [11]"Flutter vs React Native – What to Choose in 2022?", Droids On Roids, 2022. [Online]. Available: https://www.thedroidsonroids.com/blog/flutter-vs-react-native-what-to-choose-in-2021#f10. [Accessed: 28- Mar- 2022].
            </li>
            <li>
              [12]"Mobile Apps vs Web — Apps: Which is the Better Option?", Medium, 2022. [Online]. Available: https://sagaratechnology.medium.com/mobile-apps-vs-web-apps-which-is-the-better-option-868106c88730. [Accessed: 29- Mar- 2022].
            </li>
            <li>
              [13]"Angular vs React vs Vue: Which Framework to Choose in 2022", CodeinWP, 2022. [Online]. Available: https://www.codeinwp.com/blog/angular-vs-vue-vs-react/#who-wins. [Accessed: 29- Mar- 2022].
            </li>
            <li>
              [14]"The Good and the Bad of Node.js Web App Development", AltexSoft, 2022. [Online]. Available: https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-node-js-web-app-development/. [Accessed: 29- Mar- 2022].
            </li>
            <li>
              [15]"Django vs Node.js: Which One is Better For Web Development?", Monocubed, 2022. [Online]. Available: https://www.monocubed.com/blog/django-vs-node-js/#:~:text=The%20main%20difference%20between%20Django,on%20client%2Dside%20web%20applications. [Accessed: 29- Mar- 2022].
            </li>
            <li>
              [16]"Django vs Express: 2 Best Web Frameworks Compared in 2022", Monocubed, 2022. [Online]. Available: https://www.monocubed.com/blog/django-vs-express/#:~:text=In%20Django%20vs%20Express.,easily%20negated%20by%20experienced%20developers. [Accessed: 29- Mar- 2022].
            </li>
            <li>
              [17]A. Sharma, R. Verma and M. Gaikwad, "MongoDB vs SQL Databases: 4 Comprehensive Aspects", Learn | Hevo, 2022. [Online]. Available: https://hevodata.com/learn/mongodb-vs-sql/. [Accessed: 29- Mar- 2022].
            </li>
            <li>
              [18]Mongodb.com, 2022. [Online]. Available: https://www.mongodb.com/docs/manual/core/timeseries-collections/. [Accessed: 29- Mar- 2022].
            </li>
          </ol>
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default Research;
