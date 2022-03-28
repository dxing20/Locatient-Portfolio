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
          <div className="case">Dashboard</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem culpa voluptates eveniet veritatis aspernatur repellat
            exercitationem soluta, corporis numquam labore iusto, delectus
            corrupti expedita error accusantium assumenda, aut iure?
          </p>
          <div className="case">Scanner</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem culpa voluptates eveniet veritatis aspernatur repellat
            exercitationem soluta, corporis numquam labore iusto, delectus
            corrupti expedita error accusantium assumenda, aut iure?
          </p>
          <div className="case">API</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem culpa voluptates eveniet veritatis aspernatur repellat
            exercitationem soluta, corporis numquam labore iusto, delectus
            corrupti expedita error accusantium assumenda, aut iure?
          </p>
          <div className="case">Simulating Administrative Requests</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem culpa voluptates eveniet veritatis aspernatur repellat
            exercitationem soluta, corporis numquam labore iusto, delectus
            corrupti expedita error accusantium assumenda, aut iure?
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Summary</div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem culpa voluptates eveniet veritatis aspernatur repellat
            exercitationem soluta, corporis numquam labore iusto, delectus
            corrupti expedita error accusantium assumenda, aut iure?
          </p>
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
          </ol>
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default Research;
