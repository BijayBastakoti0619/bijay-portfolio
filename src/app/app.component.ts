
import {
  AfterViewInit,
  Component,
  HostListener,
  signal
} from '@angular/core';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

interface Project {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  github: string;
  featured?: boolean;
}

interface Publication {
  title: string;
  venue: string;
  year: string;
  type: string;
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly year = new Date().getFullYear();

  // =========================================
  // PROFESSIONAL EXPERIENCE
  // =========================================

  readonly experiences: Experience[] = [
    {
      role: 'Senior Java Developer (Mobile Applications)',
      company: 'Dmitra Technology',
      location: 'Remote',
      period: 'Jan 2024 — Aug 2024',
      summary:
        'Developed and maintained Android and iOS applications, focusing on modular architecture, reusable components, API integration, application reliability, and user experience.',
      highlights: [
        'Developed Android applications using Kotlin and Java and contributed to iOS development using Swift.',
        'Implemented reusable UI components, navigation, authentication workflows, and RESTful API integrations.',
        'Integrated local persistence, offline synchronization, and secure session management.',
        'Investigated crashes and performance issues, performed code reviews, and supported application testing and maintenance.'
      ],
      tech: [
        'Java',
        'Kotlin',
        'Android',
        'Swift',
        'iOS',
        'REST APIs',
        'SQLite',
        'Git'
      ]
    },
    {
      role: 'Software Developer',
      company: 'InfoDevelopers Pvt. Ltd.',
      location: 'Kathmandu, Nepal',
      period: 'Jul 2021 — Jul 2023',
      summary:
        'Developed production mobile applications and integrated backend services for digital banking, financial transactions, and real-time monitoring and data collection.',
      highlights: [
        'Developed Android applications using Java, Kotlin, MVVM architecture, Room, and SQLite.',
        'Implemented QR-payment functionality and contributed to fraud-related features supporting secure mobile banking workflows.',
        'Developed real-time monitoring and data-collection functionality for WHO-related field applications.',
        'Integrated RESTful services, authentication, and offline-first data handling with attention to application reliability and data privacy.'
      ],
      tech: [
        'Java',
        'Kotlin',
        'Android',
        'MVVM',
        'Room',
        'SQLite',
        'REST APIs',
        'JSON'
      ]
    },
    {
      role: 'Full-Stack Java Developer',
      company: 'Enfiny Innovation',
      location: 'Kathmandu, Nepal',
      period: 'Mar 2019 — Jul 2021',
      summary:
        'Developed and maintained enterprise software applications supporting banking, loan processing, payment services, and financial transaction workflows.',
      highlights: [
        'Developed and maintained Java-based application functionality for enterprise financial systems.',
        'Integrated backend services and database operations supporting business workflows.',
        'Worked with Java application components and web interfaces for financial service applications.',
        'Contributed to application troubleshooting, maintenance, and software quality improvements.'
      ],
      tech: [
        'Java',
        'Spring MVC',
        'Angular',
        'Oracle',
        'MySQL',
        'SQL'
      ]
    },
    {
      role: 'Java Developer (Android Applications)',
      company: 'Yarsha Tech',
      location: 'Kathmandu, Nepal',
      period: 'Dec 2017 — Mar 2019',
      summary:
        'Maintained and modernized Android applications, focusing on application stability, user interfaces, API integration, and production maintenance.',
      highlights: [
        'Maintained legacy Android applications developed in Java and modernized existing application components.',
        'Improved screens, navigation, reusable UI components, and responsive layouts.',
        'Integrated RESTful services, JSON data handling, and local persistence.',
        'Investigated application crashes, resolved production issues, and supported testing, builds, and Google Play releases.'
      ],
      tech: [
        'Java',
        'Android SDK',
        'XML',
        'REST APIs',
        'JSON',
        'SQLite',
        'Git'
      ]
    }
  ];

  // =========================================
  // PROJECTS
  // Research projects appear first to support
  // PhD applications.
  // =========================================

  readonly projects: Project[] = [
    {
      title: 'BERT Sentiment Analysis',
      eyebrow: 'Research / NLP / Efficient Machine Learning',
      description:
        'An experimental study investigating how freezing pretrained BERT layers affects sentiment classification performance, computational efficiency, probability calibration, and downstream ordinal prediction using IMDb movie reviews.',
      impact:
        'Freezing eight BERT layers retained approximately 99.5% of full fine-tuning performance while reducing epoch training time by approximately 40%. Isotonic calibration reduced expected calibration error by 64.23%.',
      metrics: [
        {
          value: '93.96%',
          label: 'Best F1'
        },
        {
          value: '~40%',
          label: 'Faster / epoch'
        },
        {
          value: '64.23%',
          label: 'ECE reduction'
        }
      ],
      tech: [
        'BERT',
        'PyTorch',
        'Transformers',
        'IMDb',
        'Calibration',
        'McNemar Test'
      ],
      github:
        'https://github.com/BijayBastakoti0619/BERT-Sentiment-Analysis',
      featured: true
    },
    {
      title: 'Paint-Paint Image Inpainting',
      eyebrow: 'Research / Generative AI / Computer Vision',
      description:
        'Domain-adaptive image inpainting using a hybrid ResNet-LaMa generator, Fast Fourier Convolutions, perceptual learning, and adversarial fine-tuning with a Spectral Dilated PatchGAN discriminator.',
      impact:
        'The adversarial model improved perceptual similarity over the pre-GAN model while preserving stronger global structure than the U-Net baseline on the Oxford 102 Flowers test split.',
      metrics: [
        {
          value: '0.2451',
          label: 'LPIPS ↓'
        },
        {
          value: '0.7567',
          label: 'SSIM ↑'
        },
        {
          value: '18.80',
          label: 'PSNR ↑'
        }
      ],
      tech: [
        'PyTorch',
        'GAN',
        'ResNet-18',
        'FFC',
        'PatchGAN',
        'VGG-19'
      ],
      github:
        'https://github.com/BijayBastakoti0619/paint-paint-inpainting'
    },
    {
      title: 'AI Legal Document Reader & Summarizer',
      eyebrow: 'Full-Stack Software Engineering / Applied AI',
      description:
        'A secure document engineering platform for authenticated PDF ingestion, extraction, storage, and AI-assisted summarization. The system is designed around production-style state management, failure handling, and secure user-scoped access.',
      impact:
        'Demonstrates end-to-end development across backend architecture, security, persistence, object storage, document processing, Angular interfaces, testing, and AI-ready workflows.',
      metrics: [
        {
          value: 'Java 21',
          label: 'Backend'
        },
        {
          value: 'Spring Boot 4',
          label: 'Platform'
        },
        {
          value: 'Angular 21',
          label: 'Frontend'
        }
      ],
      tech: [
        'Spring Security',
        'JWT',
        'PostgreSQL',
        'Flyway',
        'PDFBox',
        'Backblaze B2',
        'OpenAPI',
        'Docker'
      ],
      github:
        'https://github.com/BijayBastakoti0619/ai-legal-document-reader'
    }
  ];

  // =========================================
  // PUBLICATIONS
  // =========================================

  readonly publications: Publication[] = [
    {
      title:
        'LSTM vs. Transformer Models in Power Forecasting: A Comprehensive Survey',
      venue: 'Preprints.org',
      year: '2026',
      type: 'Preprint',
      url:
        'https://www.preprints.org/manuscript/202603.0624'
    },
    {
      title:
        'Generative Artificial Intelligence in Healthcare: A Systematic Review of GANs, Diffusion Models, Large Language Models, and Variational Autoencoders for Medical Applications',
      venue:
        'European Journal of Applied Science, Engineering and Technology',
      year: '2025',
      type: 'Journal Article',
      url:
        'https://doi.org/10.59324/ejaset.2025.3(4).16'
    },
    {
      title:
        'Advancements and Applications of Generative AI in Healthcare',
      venue:
        'European Journal of Theoretical and Applied Sciences',
      year: '2024',
      type: 'Journal Article',
      url:
        'https://doi.org/10.59324/ejtas.2024.2(6).77'
    }
  ];

  // =========================================
  // TECHNICAL SKILLS
  // =========================================

  readonly skillGroups = [
    {
      label: 'Mobile Development',
      skills: [
        'Android',
        'Kotlin',
        'Java',
        'Swift',
        'iOS',
        'Android SDK',
        'MVVM',
        'Room',
        'SQLite',
        'Offline-First Applications',
        'REST API Integration'
      ]
    },
    {
      label: 'AI / Machine Learning',
      skills: [
        'Python',
        'BERT',
        'PyTorch',
        'Hugging Face',
        'NLP',
        'Model Fine-Tuning',
        'Model Calibration',
        'scikit-learn',
        'Generative AI',
        'Computer Vision'
      ]
    },
    {
      label: 'Backend Development',
      skills: [
        'Java 21',
        'Spring Boot',
        'Spring Security',
        'Spring Data JPA',
        'Spring Cloud',
        'Hibernate',
        'Resilience4J',
        'REST APIs'
      ]
    },
    {
      label: 'Software Architecture',
      skills: [
        'Microservices',
        'Kafka',
        'Event-Driven Systems',
        'Design Patterns',
        'OpenAPI',
        'OAuth 2.0',
        'OIDC',
        'SAML'
      ]
    },
    {
      label: 'Frontend Development',
      skills: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Angular Material',
        'React',
        'HTML5',
        'CSS3'
      ]
    },
    {
      label: 'Cloud / DevOps',
      skills: [
        'AWS',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'Terraform',
        'Jenkins',
        'GitHub Actions',
        'Linux'
      ]
    },
    {
      label: 'Databases / Testing',
      skills: [
        'PostgreSQL',
        'Oracle',
        'MySQL',
        'MongoDB',
        'JUnit',
        'Mockito',
        'Testcontainers',
        'SonarQube',
        'Git'
      ]
    }
  ];

  // =========================================
  // SCROLL REVEAL ANIMATIONS
  // =========================================

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    document
      .querySelectorAll('.reveal')
      .forEach((el) => observer.observe(el));
  }

  // =========================================
  // NAVBAR SCROLL STATE
  // =========================================

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 28);
  }

  // =========================================
  // MOBILE MENU
  // =========================================

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
