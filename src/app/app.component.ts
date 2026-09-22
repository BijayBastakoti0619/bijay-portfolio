import { AfterViewInit, Component, HostListener, signal } from '@angular/core';

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

  readonly experiences: Experience[] = [
    {
      role: 'Senior Java Developer',
      company: 'Dmitra Technology',
      location: 'Remote',
      period: 'Jan 2024 — Aug 2024',
      summary: 'Built secure distributed services and AI-integrated enterprise workflows with Spring Boot, Kafka, and cloud-native infrastructure.',
      highlights: [
        'Developed 8+ Spring Boot microservices and 20+ REST API endpoints.',
        'Improved API response time by ~25% through service, JPA, and SQL optimization.',
        'Built Kafka integrations processing ~50K+ events/day and increased automated test coverage to ~80%.'
      ],
      tech: ['Java', 'Spring Boot', 'Kafka', 'OpenID Connect', 'Kubernetes', 'AWS']
    },
    {
      role: 'Full-Stack Java Developer',
      company: 'InfoDevelopers Pvt. Ltd.',
      location: 'Kathmandu, Nepal',
      period: 'Jul 2021 — Jul 2023',
      summary: 'Delivered resilient backend services, Angular interfaces, and AI-assisted integration flows for enterprise systems.',
      highlights: [
        'Designed 10+ microservices and 30+ REST APIs with Spring Cloud and Resilience4J.',
        'Built Kafka producers/consumers processing ~100K+ messages/day.',
        'Reduced deployment turnaround by ~35% using Docker, Kubernetes, AWS, Terraform, and Jenkins.'
      ],
      tech: ['Spring Cloud', 'Angular', 'Kafka', 'Docker', 'Terraform', 'Jenkins']
    },
    {
      role: 'Full-Stack Java Developer',
      company: 'Enfiny Innovation',
      location: 'Kathmandu, Nepal',
      period: 'Mar 2019 — Jul 2021',
      summary: 'Developed banking, loan, mortgage, payment, and transaction workflows across Java backends and Angular frontends.',
      highlights: [
        'Built 15+ Spring Boot APIs supporting ~50K+ financial transactions/day.',
        'Optimized PL/SQL and SQL execution time by ~30%.',
        'Raised test coverage to ~75%, contributing to ~20% fewer regression defects.'
      ],
      tech: ['Java', 'Spring MVC', 'Angular', 'Oracle', 'MySQL', 'JUnit']
    },
    {
      role: 'Java Developer',
      company: 'Yarsha Tech',
      location: 'Kathmandu, Nepal',
      period: 'Dec 2017 — Mar 2019',
      summary: 'Built foundational enterprise APIs, persistence components, event processing, tests, and production support workflows.',
      highlights: [
        'Developed and maintained 10+ Java/Spring Boot REST endpoints.',
        'Supported Kafka processing of ~20K+ events/day.',
        'Reduced recurring application issues by ~20% through log analysis and production troubleshooting.'
      ],
      tech: ['Java', 'Spring Boot', 'Hibernate', 'Kafka', 'Maven', 'ELK']
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'AI Legal Document Reader & Summarizer',
      eyebrow: 'Flagship Full-Stack Project',
      description: 'A secure document engineering platform for authenticated PDF ingestion, extraction, storage, and AI-assisted summarization. The system is designed around production-style state management, failure handling, and secure user-scoped access.',
      impact: 'Demonstrates end-to-end ownership across backend architecture, security, persistence, object storage, document processing, Angular UX, testing, and AI-ready workflows.',
      metrics: [
        { value: 'Java 21', label: 'Backend' },
        { value: 'Spring Boot 4', label: 'Platform' },
        { value: 'Angular 21', label: 'Frontend' }
      ],
      tech: ['Spring Security', 'JWT', 'PostgreSQL', 'Flyway', 'PDFBox', 'Backblaze B2', 'OpenAPI', 'Docker'],
      github: 'https://github.com/BijayBastakoti0619/ai-legal-document-reader',
      featured: true
    },
    {
      title: 'BERT Sentiment Analysis',
      eyebrow: 'NLP / Efficient ML',
      description: 'A rigorous study of how BERT layer freezing changes sentiment-classification accuracy, training speed, probability calibration, and downstream ordinal prediction on IMDb reviews.',
      impact: 'Freezing eight BERT layers retained ~99.5% of full fine-tuning performance while reducing epoch training time by ~40%. Isotonic calibration reduced ECE by 64.23%.',
      metrics: [
        { value: '93.96%', label: 'Best F1' },
        { value: '~40%', label: 'Faster / epoch' },
        { value: '64.23%', label: 'ECE reduction' }
      ],
      tech: ['BERT', 'PyTorch', 'Transformers', 'IMDb', 'Calibration', 'McNemar Test'],
      github: 'https://github.com/BijayBastakoti0619/BERT-Sentiment-Analysis'
    },
    {
      title: 'Paint-Paint Image Inpainting',
      eyebrow: 'Generative AI / Computer Vision',
      description: 'Domain-adaptive image inpainting using a hybrid ResNet-LaMa generator, Fast Fourier Convolutions, perceptual learning, and adversarial fine-tuning with a Spectral Dilated PatchGAN discriminator.',
      impact: 'The adversarial model improved perceptual similarity over the pre-GAN model while preserving stronger global structure than the U-Net baseline on the Oxford 102 Flowers test split.',
      metrics: [
        { value: '0.2451', label: 'LPIPS ↓' },
        { value: '0.7567', label: 'SSIM ↑' },
        { value: '18.80', label: 'PSNR ↑' }
      ],
      tech: ['PyTorch', 'GAN', 'ResNet-18', 'FFC', 'PatchGAN', 'VGG-19'],
      github: 'https://github.com/BijayBastakoti0619/paint-paint-inpainting'
    }
  ];

  readonly publications: Publication[] = [
    {
      title: 'LSTM vs. Transformer Models in Power Forecasting: A Comprehensive Survey',
      venue: 'Preprints.org',
      year: '2026',
      type: 'Preprint',
      url: 'https://www.preprints.org/manuscript/202603.0624'
    },
    {
      title: 'Generative Artificial Intelligence in Healthcare: A Systematic Review of GANs, Diffusion Models, Large Language Models, and Variational Autoencoders for Medical Applications',
      venue: 'European Journal of Applied Science, Engineering and Technology',
      year: '2025',
      type: 'Journal Article',
      url: 'https://doi.org/10.59324/ejaset.2025.3(4).16'
    },
    {
      title: 'Advancements and Applications of Generative AI in Healthcare',
      venue: 'European Journal of Theoretical and Applied Sciences',
      year: '2024',
      type: 'Journal Article',
      url: 'https://doi.org/10.59324/ejtas.2024.2(6).77'
    }
  ];

  readonly skillGroups = [
    { label: 'Backend', skills: ['Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Cloud', 'Hibernate', 'Resilience4J', 'REST APIs'] },
    { label: 'Architecture', skills: ['Microservices', 'Kafka', 'Event-Driven Systems', 'Design Patterns', 'OpenAPI', 'OAuth 2.0', 'OIDC', 'SAML'] },
    { label: 'Frontend', skills: ['Angular 21', 'TypeScript', 'RxJS', 'Angular Material', 'React', 'HTML5', 'CSS3'] },
    { label: 'AI / ML', skills: ['BERT', 'PyTorch', 'Hugging Face', 'NLP', 'Model Fine-Tuning', 'Inference APIs', 'Spring AI', 'scikit-learn'] },
    { label: 'Cloud / DevOps', skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Linux'] },
    { label: 'Data / Quality', skills: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'JUnit', 'Mockito', 'Testcontainers', 'SonarQube', 'ELK', 'Splunk'] }
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 28);
  }

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
