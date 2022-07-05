import { useEffect, useRef } from "react";
import {
  MailOpenIcon,
  MapIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Footer = ({ t }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/kuldar/cl4q0pysx000714p90akffmq8",
      center: [24.685, 59.366],
      zoom: 12,
      scrollZoom: false,
      localFontFamily: "Prompt",
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "bottom-left");

    map.current.on("load", () => {
      const marker = document.createElement("div");
      marker.className = "marker";
      marker.style.backgroundImage = "url('img/marker.svg')";
      marker.style.width = "85px";
      marker.style.height = "63px";
      marker.style.top = "-20px"; // hmm..

      new mapboxgl.Marker(marker)
        .setLngLat({ lat: 59.36562513754081, lng: 24.656469969871132 })
        .addTo(map.current);
    });
  }, []);

  return (
    <footer className="relative w-full h-full">
      <div className="static inset-0 z-10 md:absolute md:pointer-events-none">
        <div className="grid w-full max-w-6xl grid-cols-2 mx-auto">
          <div className="col-span-2 md:pr-6 md:col-span-1 md:col-start-2 md:py-14">
            <div className="flex flex-col w-full h-full p-10 space-y-6 text-white bg-black pointer-events-auto rounded-2xl">
              <div className="flex items-center">
                <MailOpenIcon className="w-6 h-6 mr-4 md:w-8 md:h-8 text-gold-500" />
                <div>
                  <div className="text-sm font-medium tracking-wider uppercase text-stone-400">
                    {t.contact.email}
                  </div>
                  <div className="text-2xl">info@a-barber.ee</div>
                </div>
              </div>

              <div className="flex items-center">
                <MapIcon className="w-6 h-6 mr-4 md:w-8 md:h-8 text-gold-500" />
                <div>
                  <div className="text-sm font-medium tracking-wider uppercase text-stone-400">
                    {t.contact.address}
                  </div>
                  <div className="text-2xl">Lemmiku 34, Nõmme, Tallinn</div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium tracking-wider uppercase text-stone-400">
                  {t.contact.howToComeLabel}
                </div>

                <div className="mt-1 text-lg leading-tight">
                  {t.contact.howToComeText}
                </div>
              </div>

              <div className="flex pt-2 space-x-4">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 space-x-2 text-base font-medium rounded-md shadow bg-gradient-to-r from-gold-400 to-gold-500 whitespace-nowrap text-gold-900"
                >
                  <span>Google Maps</span>
                  <ArrowRightIcon className="flex-shrink-0 w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 space-x-2 text-base font-medium rounded-md shadow bg-gradient-to-r from-gold-400 to-gold-500 whitespace-nowrap text-gold-900"
                >
                  <span>Waze</span>
                  <ArrowRightIcon className="flex-shrink-0 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden w-full h-full md:block opacity-80"
        ref={mapContainer}
      />
    </footer>
  );
};

export default Footer;
