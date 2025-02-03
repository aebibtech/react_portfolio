import { FaEnvelope, FaLinkedin, FaGithub, FaMicrosoft, FaDotCircle } from 'react-icons/fa';
import { FaDocker, FaJenkins, FaDatabase } from 'react-icons/fa';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiRuby, SiPostgresql, SiMongodb } from 'react-icons/si';
import { FaTools, FaCode, FaCloud, FaServer, FaDesktop, FaCogs, FaDatabase as FaDatabaseAlt } from 'react-icons/fa';
import { FaCss3, FaGlobe, FaHtml5, FaJs, FaLaravel, FaPhp } from 'react-icons/fa6';

const Skills = () => {
    return (
			<div className="py-16 px-4 mt-4 sm:mt-48" id="Skills">
				<h3 className="text-3xl sm:text-4xl md:text-7xl text-center mb-12">Skills</h3>
				<div className="skills-grid">
					<div className="skill-item">
						<FaTools />
						<span>Jenkins</span>
					</div>
					<div className="skill-item">
						<FaDocker />
						<span>Docker</span>
					</div>
					<div className="skill-item">
						<FaGithub />
						<span>GitHub Actions</span>
					</div>
					<div className="skill-item">
						<FaCloud />
						<span>Microsoft Azure</span>
					</div>
					<div className="skill-item">
						<FaReact />
						<span>React</span>
					</div>
					<div className="skill-item">
						<FaNodeJs />
						<span>Node.js</span>
					</div>
					<div className="skill-item">
						<FaServer />
						<span>Express.js</span>
					</div>
					<div className="skill-item">
						<FaNodeJs />
						<span>Socket.io</span>
					</div>
					<div className="skill-item">
						<SiRuby />
						<span>Ruby on Rails</span>
					</div>
					<div className="skill-item">
						<SiPostgresql />
						<span>PostgreSQL</span>
					</div>
					<div className="skill-item">
						<SiMongodb />
						<span>MongoDB</span>
					</div>
					<div className="skill-item">
						<FaDatabaseAlt />
						<span>MySQL</span>
					</div>
					<div className="skill-item">
						<FaDatabaseAlt />
						<span>Redis</span>
					</div>
					<div className="skill-item">
						<FaGlobe />
						<span>ASP.NET Core</span>
					</div>
					<div className="skill-item">
						<FaCode />
						<span>C#</span>
					</div>
					<div className="skill-item">
						<FaDesktop />
						<span>UI/UX Design</span>
					</div>
					<div className="skill-item">
						<FaCogs />
						<span>Responsive Web Design</span>
					</div>
					<div className="skill-item">
						<FaHtml5 />
						<span>HTML</span>
					</div>
					<div className="skill-item">
						<FaCss3 />
						<span>CSS</span>
					</div>
					<div className="skill-item">
						<FaJs />
						<span>JavaScript</span>
					</div>
					<div className="skill-item">
						<FaPhp />
						<span>PHP</span>
					</div>
					<div className="skill-item">
						<FaPhp />
						<span>CodeIgniter</span>
					</div>
					<div className="skill-item">
						<FaLaravel />
						<span>Laravel</span>
					</div>
				</div>
			</div>
    )
}

export default Skills