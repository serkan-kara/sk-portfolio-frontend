import { CppIconSVG } from "@/common/icons/CppIconSVG";
import { CssIconSVG } from "@/common/icons/CssIconSVG";
import { DotNetIconSVG } from "@/common/icons/DotNetIconSVG";
import { HtmlIconSVG } from "@/common/icons/HtmlIconSVG";
import { JavascriptIconSVG } from "@/common/icons/JavascriptIconSVG";
import { NextJSIconSVG } from "@/common/icons/NextJSIconSVG";
import { NodeJSIconSVG } from "@/common/icons/NodeJSIconSVG";
import { PythonIconSVG } from "@/common/icons/PythonIconSVG";
import { ReactJSIconSVG } from "@/common/icons/ReactJSIconSVG";
import { TypescriptIconSVG } from "@/common/icons/TypescriptIconSVG";
import { Skill } from "@/components/container/Skill";
import { Timeline } from "@/components/container/Timeline";
import { IBackgroundItem } from "@/components/container/Timeline/types";

const Background = () => {
	const backgroundItems: IBackgroundItem[] = [
		{
			order: 1,
			name: "Yenimahalle Belediyesi",
			description: `I oversee government IT projects at Yenimahalle Belediyesi, where we have successfully undertaken two significant initiatives:

			Election Data Web Application:
			We have created a web application designed to gather data from election sites, perform in-depth analysis, and generate insightful reports. This system is instrumental in providing the mayor with region-specific filtering options, enhancing decision-making in electoral matters.
			
			Hardware and Software Inventory System:
			Additionally, we've developed an intranet-based web/desktop application to comprehensively catalog hardware and software information from all computers connected to our LDAP directory. We've implemented an agent on local computers to autonomously collect and transmit data to a central server. This system allows us to closely monitor any changes in this data, ensuring the efficient management of our IT assets.`,
			title: "Senior Software Engineer",
			startDate: "2021",
			endDate: "2022",
			isPresent: true,
		},
		{
			order: 2,
			name: "Hiwiser",
			description: `I held the role of overseeing system design, backend and frontend development, as well as project management for Hiwiser, a dynamic marketplace dedicated to curating and offering unique experiences. In the development of this platform, we leveraged Node.js as the backend technology, utilized MongoDB as our document-oriented database, implemented React.js for the frontend, and harnessed GraphQL as our query language.`,
			title: "Lead Software Engineer",
			startDate: "2019",
			endDate: "2022",
			isPresent: false,
		},
		{
			order: 3,
			name: "Vega Software",
			description: `VegaGrup Software specializes in a comprehensive range of business solutions, encompassing ERP, MRP 2 (Production Planning Tracking and Control), Order and Purchase Management, Stock Planning, Logistics Management, Retailer Management, Finance and Accounting Management, Scales, Cash Register, POS, Retail Solutions, BARCODE Applications, Handheld Terminal Applications, Hot Sales, Restaurant and Cafe Management, Fastfood Management, Staff Efficiency Tracking, and RF/ID applications.

			Within this scope, I assumed responsibility for the development of a web-based accounting management software using cutting-edge technologies such as Asp.Net, HTML, CSS, JavaScript, and jQuery.`,
			title: "Senior Software Developer",
			startDate: "2018",
			endDate: "2019",
			isPresent: false,
		},
		{
			order: 4,
			name: "Mia Technology",
			description: `Mia Technology is an innovative research and development (R&D) firm specializing in critical sectors, including HBYS, the Defense Industry, and Cyber Security.

			Within the organization, I undertook the pivotal role of transitioning HBYS from a desktop environment to a web-based platform. This transformation was achieved through the proficient utilization of cutting-edge technologies, including Node.js and Angular.`,
			title: "Senior Software Developer",
			startDate: "2017",
			endDate: "2018",
			isPresent: false,
		},
		{
			order: 5,
			name: "Dece Software",
			description: `Dece is a distinguished software house specializing in Enterprise Content Management, Big Data solutions, and Geographic Information Systems (GIS).

			Within our portfolio of offerings, we have MOBIDI, a robust Mobile Data Capture and Team Management application designed for on-site teams. MOBIDI seamlessly operates in both offline and online modes, facilitating the comprehensive recording of diverse field data types, including sound, images, video recordings, notes, and more.
			
			In my role, I assumed responsibility for orchestrating the synchronization between MOBIDI and MOBIDI Desktop, ensuring a seamless and efficient data management experience.`,
			title: "Software Developer",
			startDate: "2016",
			endDate: "2017",
			isPresent: false,
		},
		{
			order: 6,
			name: "Pixelma",
			description: `Pixelma is a distinguished Software Development firm specializing in the meticulous execution of customized projects tailored to meet the precise demands of our valued clientele.

			In my capacity as a Project Lead, I had the privilege of overseeing a team of three professionals. My role extended to the comprehensive development and adept management of projects, ensuring their alignment with and fulfillment of customer specifications. Throughout these projects, I adeptly harnessed a suite of technologies, including Asp.Net, HTML, CSS, JavaScript, and jQuery, to deliver outstanding results.`,
			title: "Project Lead",
			startDate: "2014",
			endDate: "2016",
			isPresent: false,
		},
		{
			order: 7,
			name: "Elektra Bilisim",
			description: `Elektra is a prominent software development firm and a distinguished representative of Logo accounting products within the industry.

			In my capacity as a software developer, I have undertaken numerous e-commerce projects intricately integrated with Logo accounting software solutions. These projects were meticulously crafted using a sophisticated technology stack, including Asp.Net, HTML, CSS, JavaScript, and jQuery. Additionally, I have applied my design expertise by creating captivating e-commerce project visuals through the use of Adobe Photoshop.`,
			title: "Software Developer",
			startDate: "2012",
			endDate: "2014",
			isPresent: false,
		},
		{
			order: 8,
			name: "Teknobay",
			description: `Teknobay is a Software Development firm renowned for its bespoke project solutions, custom-tailored to meet the unique needs of our clients.

			In my capacity as a software developer, I have had the privilege of delivering over 150 dynamic websites, leveraging a robust technology stack comprising Asp.Net, HTML, CSS, JavaScript, and jQuery. My expertise extends to translating meticulously crafted designs from industry-standard software such as Photoshop and Illustrator into meticulously structured HTML/CSS layouts. Furthermore, I have successfully developed sophisticated Content Management Systems utilizing the power of Asp.Net.`,
			title: "Software Developer",
			startDate: "2010",
			endDate: "2012",
			isPresent: false,
		},
	];

	return (
		<div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
			<Timeline items={backgroundItems} />
			<div className='flex flex-col space-y-12'>
				<div className=''>
					<span>Tech</span>
					<div className='grid grid-cols-2 gap-4'>
						<Skill
							name='ReactJS'
							skillIcon={ReactJSIconSVG}
							experience={5}
							rating={5}
							showProgress
							progressPercent={85}
							startYear={2018}
						/>
						<Skill
							name='NextJS'
							skillIcon={NextJSIconSVG}
							experience={2}
							rating={4}
							showProgress
							progressPercent={80}
							startYear={2021}
						/>
						<Skill
							name='NodeJS'
							skillIcon={NodeJSIconSVG}
							experience={6}
							rating={4}
							showProgress
							progressPercent={90}
							startYear={2017}
						/>
						<Skill
							name='Typescript'
							skillIcon={TypescriptIconSVG}
							experience={2}
							rating={4}
							showProgress
							progressPercent={85}
							startYear={2021}
						/>
					</div>
				</div>
				<div>
					<span>Language</span>
					<div className='grid grid-cols-2 gap-4'>
						<Skill
							name='Javascript'
							skillIcon={JavascriptIconSVG}
							experience={12}
							rating={5}
							showProgress
							progressPercent={90}
							startYear={2011}
						/>
						<Skill
							name='Html'
							skillIcon={HtmlIconSVG}
							experience={12}
							rating={5}
							showProgress
							progressPercent={90}
							startYear={2009}
						/>
						<Skill
							name='Css'
							skillIcon={CssIconSVG}
							experience={12}
							rating={5}
							showProgress
							progressPercent={90}
							startYear={2009}
						/>
						<Skill
							name='Python'
							skillIcon={PythonIconSVG}
							experience={1}
							rating={1}
							learning
							showProgress
							progressPercent={20}
							startYear={2023}
						/>
						<Skill
							name='C++'
							skillIcon={CppIconSVG}
							experience={9}
							rating={1}
							learning
							showProgress
							progressPercent={30}
							startYear={2022}
						/>
						<Skill
							name='.Net'
							skillIcon={DotNetIconSVG}
							experience={9}
							rating={5}
							obsolete
							showProgress
							progressPercent={90}
							startYear={2009}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Background;
