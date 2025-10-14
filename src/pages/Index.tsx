import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'education', label: 'Образование' },
    { id: 'achievements', label: 'Достижения' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Сообщение отправлено!',
        description: 'Спасибо за обращение. Я свяжусь с вами в ближайшее время.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Осенний проект',
      description: 'Коллективная работа детей средней группы',
      image: 'https://cdn.poehali.dev/projects/c45d3094-a6ed-422e-8d76-bb7db750ec0b/files/b1fefe42-b8f6-4aab-b2b5-20a7960bca08.jpg',
    },
    {
      id: 2,
      title: 'Творческая мастерская',
      description: 'Развитие мелкой моторики через искусство',
      image: 'https://cdn.poehali.dev/projects/c45d3094-a6ed-422e-8d76-bb7db750ec0b/files/b1fefe42-b8f6-4aab-b2b5-20a7960bca08.jpg',
    },
    {
      id: 3,
      title: 'Экологический проект',
      description: 'Изучение природы и окружающего мира',
      image: 'https://cdn.poehali.dev/projects/c45d3094-a6ed-422e-8d76-bb7db750ec0b/files/b1fefe42-b8f6-4aab-b2b5-20a7960bca08.jpg',
    },
    {
      id: 4,
      title: 'Праздник весны',
      description: 'Театрализованное представление',
      image: 'https://cdn.poehali.dev/projects/c45d3094-a6ed-422e-8d76-bb7db750ec0b/files/b1fefe42-b8f6-4aab-b2b5-20a7960bca08.jpg',
    },
    {
      id: 5,
      title: 'Музыкальная деятельность',
      description: 'Развитие музыкальных способностей',
      image: 'https://cdn.poehali.dev/projects/c45d3094-a6ed-422e-8d76-bb7db750ec0b/files/b1fefe42-b8f6-4aab-b2b5-20a7960bca08.jpg',
    },
    {
      id: 6,
      title: 'Спортивный досуг',
      description: 'Физическое развитие дошкольников',
      image: 'https://cdn.poehali.dev/projects/c45d3094-a6ed-422e-8d76-bb7db750ec0b/files/b1fefe42-b8f6-4aab-b2b5-20a7960bca08.jpg',
    },
  ];

  const achievements = [
    {
      icon: 'Award',
      title: 'Победитель конкурса',
      description: 'Молодой и стильный 2023',
      color: 'bg-gradient-to-br from-[#FF6B9D] to-[#FFA07A]',
    },
    {
      icon: 'BookOpen',
      title: 'Публикации',
      description: 'Более 15 методических разработок',
      color: 'bg-gradient-to-br from-[#4ECDC4] to-[#44A8B3]',
    },
    {
      icon: 'Users',
      title: 'Опыт работы',
      description: '3 года инструктором по физической культуре',
      color: 'bg-gradient-to-br from-[#FF6B9D] to-[#FFA07A]',
    },
    {
      icon: 'Star',
      title: 'Благодарности',
      description: 'Грамоты от родителей и администрации',
      color: 'bg-gradient-to-br from-[#4ECDC4] to-[#44A8B3]',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#4ECDC4]/30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B9D] to-[#4ECDC4] bg-clip-text text-transparent">
              Портфолио педагога
            </h1>
            <div className="hidden md:flex gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-[#FF6B9D] ${
                    activeSection === item.id ? 'text-[#FF6B9D]' : 'text-[#2C3E50]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-[#2C3E50]">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B9D] to-[#4ECDC4] bg-clip-text text-transparent mb-4">
                    Меню
                  </h2>
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left text-lg font-medium transition-colors hover:text-[#FF6B9D] py-2 ${
                        activeSection === item.id ? 'text-[#FF6B9D]' : 'text-[#2C3E50]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4"
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C3E50] leading-tight">
              Добро пожаловать в мой{' '}
              <span className="bg-gradient-to-r from-[#FF6B9D] to-[#4ECDC4] bg-clip-text text-transparent">
                мир педагогики
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Инструктор по физической культуре в МДОУ «Детский сад № 24». Вдохновляю детей на любовь к активному образу жизни и здоровью.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-[#FF6B9D] to-[#FFA07A] hover:opacity-90 text-white px-8 py-6 text-lg rounded-full"
              >
                Посмотреть работы
              </Button>
              <Button
                onClick={() => scrollToSection('contacts')}
                variant="outline"
                className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white px-8 py-6 text-lg rounded-full"
              >
                Связаться
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B9D] to-[#4ECDC4] rounded-3xl blur-3xl opacity-20"></div>
            <img
              src="https://cdn.poehali.dev/projects/c45d3094-a6ed-422e-8d76-bb7db750ec0b/files/07984742-08ab-4279-9949-98c315c65825.jpg"
              alt="Педагог"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2C3E50]">
            Обо мне
          </h2>
          <Card className="border-[#4ECDC4]/30 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Меня зовут Маренкова Виктория Сергеевна, и я работаю инструктором по физической культуре в МДОУ «Детский сад № 24» уже 3 года.
                </p>
                <p>
                  Моя цель — не просто научить детей двигаться, а вдохновить их на любовь к активному образу жизни. Я хочу, чтобы каждый ребенок чувствовал себя сильным, уверенным и счастливым. Для этого я стараюсь развивать их физическую активность, координацию и выносливость, закладывая фундамент здоровья на всю жизнь.
                </p>
                <p>
                  Я верю, что детство — это время, когда формируется личность. Поэтому я всегда учитываю особенности и интересы каждого ребенка, подбирая занятия, которые будут ему интересны и полезны.
                </p>
                <p>
                  Поэтому я постоянно развиваюсь, чтобы быть в курсе новых методик и технологий в области дошкольного образования. Моя цель — сделать занятия не только полезными, но и увлекательными, чтобы каждый ребенок с радостью приходил в детский сад.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="education" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2C3E50]">
            Образование
          </h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-[#FF6B9D] shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#FF6B9D] to-[#FFA07A] rounded-xl">
                    <Icon name="GraduationCap" className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[#2C3E50] mb-2">
                      Высшее педагогическое образование
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Московский университет "РГСУ"
                    </p>
                    <p className="text-gray-500">2025 г. • Инструктор по ФИЗО</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#FF6B9D] shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#FF6B9D] to-[#FFA07A] rounded-xl">
                    <Icon name="Award" className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[#2C3E50] mb-2">
                      Курсы повышения квалификации
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Государственное образовательное учреждение дополнительного образования «Коми республиканский институт развития образования»
                    </p>
                    <p className="text-gray-600 mb-2">
                      Программа: «Современное образование или, как сегодня работать в детском саду»
                    </p>
                    <p className="text-gray-600 mb-2">
                      Образовательная стажировка на базе МБОУ «НШДС №1» города Воркуты, участника республиканского проекта «Импульс» по направлению «Спорткар» федерального проекта «Детский сад – маршруты развития»
                    </p>
                    <p className="text-gray-500">05-06.12.2025 г.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2C3E50]">
            Достижения
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-2 border-[#4ECDC4]/30 hover:border-[#FF6B9D] transition-all hover:shadow-xl hover:-translate-y-2 duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${achievement.color} flex items-center justify-center`}>
                    <Icon name={achievement.icon} className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#2C3E50]">
            Портфолио
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Галерея праздников, конкурсов, выступлений
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer group border-2 border-transparent hover:border-[#4ECDC4] transition-all hover:shadow-xl overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 bg-gradient-to-br from-[#FF6B9D]/10 to-[#4ECDC4]/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2C3E50]">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#4ECDC4]/30 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6">Свяжитесь со мной</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#FF6B9D] to-[#FFA07A] rounded-xl">
                      <Icon name="Mail" className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Электронная почта</p>
                      <a
                        href="mailto:marenkovavictoria@yandex.ru"
                        className="text-lg font-semibold text-[#2C3E50] hover:text-[#FF6B9D] transition-colors"
                      >
                        marenkovavictoria@yandex.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#FF6B9D] to-[#FFA07A] rounded-xl">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Место работы</p>
                      <p className="text-lg font-semibold text-[#2C3E50]">
                        МДОУ «Детский сад № 24»
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4ECDC4]/30 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6">Форма обратной связи</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#2C3E50] font-medium">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-[#4ECDC4]/30 focus:border-[#FF6B9D]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#2C3E50] font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-[#4ECDC4]/30 focus:border-[#FF6B9D]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#2C3E50] font-medium">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Напишите ваше сообщение..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="border-[#4ECDC4]/30 focus:border-[#FF6B9D] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#FF6B9D] to-[#FFA07A] hover:opacity-90 text-white py-6 text-lg rounded-full"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C3E50] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2024 Портфолио педагога. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;