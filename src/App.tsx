import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  Brain, 
  Zap, 
  TrendingUp, 
  MessageCircle, 
  ShieldCheck, 
  ChevronDown,
  ArrowRight,
  Target,
  Bot,
  Lock
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        <ChevronDown className={`h-6 w-6 text-red-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-gray-700 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState(9 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-200 selection:text-red-900">
      
      {/* COUNTDOWN BANNER */}
      <div className="bg-yellow-400 text-black font-bold py-3 px-4 text-center sticky top-0 z-50 shadow-md flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="uppercase tracking-wide text-sm md:text-base">¡ATENCIÓN! OFERTA LIMITADA. El precio especial de $6.90 USD expira en:</span>
        </div>
        <div className="bg-black text-yellow-400 px-3 py-1 rounded-md text-xl md:text-2xl font-black tracking-widest shadow-inner">
          {formattedTime}
        </div>
      </div>

      {/* 1. HEADLINE & 2. SUBHEADLINE (HERO SECTION) */}
      <section className="bg-white text-gray-900 pt-20 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Imagen del producto */}
            <div className="mb-12 relative">
              <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-10 rounded-full"></div>
              <img 
                src="./hero-image.png" 
                alt="Sistema Completo Anti-Procrastinación + IA" 
                className="w-full max-w-4xl mx-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10"
                onError={(e) => {
                  // Fallback in case the image is not uploaded yet
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/business/1200/600";
                }}
              />
            </div>

            <p className="text-red-600 font-bold tracking-widest uppercase text-sm md:text-base mb-6">
              Atención: Emprendedores y Creadores que quieren resultados RÁPIDOS
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 tracking-tight">
              CÓMO DESTRUIR LA PROCRASTINACIÓN Y CREAR UN NEGOCIO RENTABLE EN INTERNET <span className="text-red-600">USANDO INTELIGENCIA ARTIFICIAL</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubre el sistema exacto que está ayudando a personas comunes a dejar de perder el tiempo y empezar a generar ingresos online, <span className="text-gray-900 font-bold border-b-2 border-red-500">incluso si empiezas desde cero y trabajas menos de 2 horas al día.</span>
            </p>
            
            <a href="https://pay.hotmart.com/J104876487Y?checkoutMode=10" className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl py-5 px-10 rounded-full transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
              SÍ, QUIERO EL SISTEMA AHORA <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center">
              <Lock className="w-4 h-4 mr-2" /> Pago 100% Seguro. Acceso Inmediato.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-10 leading-tight">
            ¿Sientes que los días pasan y <span className="text-red-600 underline decoration-4 underline-offset-4">sigues en el mismo lugar?</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>Tienes grandes ideas. Sabes que hay dinero en internet. Ves a otros lográndolo todos los días en Instagram y TikTok.</p>
            <p>Pero cuando te sientas frente a la computadora... <strong>te paralizas.</strong></p>
            <p>Abres las redes sociales. Miras un video en YouTube "para inspirarte". Dejas todo para "mañana".</p>
            <p className="font-bold text-2xl text-black border-l-4 border-red-600 pl-6 py-2 my-8">
              Y ese "mañana" nunca llega.
            </p>
            <p>Te sientes frustrado. Culpable. Sientes que estás desperdiciando tu potencial mientras otros, con menos talento que tú, están ganando dinero online.</p>
          </div>
        </div>
      </section>

      {/* 4. STORY / EMOTIONAL CONNECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8">Sé exactamente cómo te sientes.</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>Yo también estuve ahí. Atrapado en el ciclo tóxico de la "parálisis por análisis".</p>
            <p>Compraba cursos que nunca terminaba. Me sentía abrumado por tanta información técnica. Pensaba: <em>"No soy lo suficientemente disciplinado"</em> o <em>"La tecnología es muy difícil para mí"</em>.</p>
            <p>Hasta que descubrí algo que lo cambió todo.</p>
            <p className="font-bold text-xl text-black">El problema no eras tú. El problema era que estabas usando pura "fuerza de voluntad".</p>
            <p>Y la fuerza de voluntad se agota. Es como la batería de tu celular. Al final del día, está en 1%.</p>
            <p>No necesitabas más motivación. <strong className="text-red-600 bg-red-50 px-2 py-1">Necesitabas un SISTEMA. Y necesitabas APALANCAMIENTO.</strong></p>
          </div>
        </div>
      </section>

      {/* 5. SOLUTION PRESENTATION */}
      <section className="py-24 px-4 bg-white text-gray-900 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 font-bold tracking-widest uppercase mb-4">Presentando la solución definitiva</p>
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
            El Sistema Completo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Anti-Procrastinación + IA</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            El único sistema diseñado para hackear tu mente, eliminar la pereza y usar la Inteligencia Artificial para hacer el 90% del trabajo pesado por ti.
          </p>
        </div>
      </section>

      {/* 6 & 11. WHAT'S INCLUDED (DETAILED LIST) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">Esto es exactamente lo que recibes hoy:</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Item 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Ebook "Venciendo la Procrastinación"</h3>
              <p className="text-gray-600 leading-relaxed">
                Descubre cómo reprogramar tu cerebro para la acción. Aprenderás a usar psicología comprobada y gatillos mentales para eliminar la pereza y entrar en estado de "flujo" instantáneo.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Ebook "IA Express – Kit de Automatización"</h3>
              <p className="text-gray-600 leading-relaxed">
                El manual paso a paso para usar inteligencia artificial para crear contenido magnético, atraer clientes calificados y vender online, incluso si nunca has usado ChatGPT.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Prompts Listos Para Usar</h3>
              <p className="text-gray-600 leading-relaxed">
                No pierdas tiempo adivinando qué decirle a la IA. Te entrego mis comandos exactos (copiar y pegar) para generar contenido viral, ideas de negocio rentables y textos de venta persuasivos.
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">4. Guiones de Ventas (WhatsApp y MD)</h3>
              <p className="text-gray-600 leading-relaxed">
                Qué decir exactamente cuando alguien te pregunta "precio". Guiones psicológicos probados para cerrar ventas por mensajes directos sin sonar como un vendedor desesperado.
              </p>
            </div>

            {/* Item 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-colors md:col-span-2">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">5. Estrategia Simple de Negocio Online</h3>
              <p className="text-gray-600 leading-relaxed">
                El mapa exacto para empezar tu negocio digital desde cero usando IA. Sin complicaciones técnicas, sin crear sitios web complejos. Solo lo que realmente funciona hoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BENEFITS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Lo que lograrás con este sistema:</h2>
          <div className="space-y-4">
            {[
              "Despierta cada día sabiendo exactamente qué hacer, sin confusión ni estrés.",
              "Deja que la Inteligencia Artificial cree tu contenido en segundos (mientras tú tomas café).",
              "Atrae clientes calificados sin tener que rogarles ni perseguirlos.",
              "Vende con confianza usando guiones probados que convierten curiosos en compradores.",
              "Recupera tu tiempo libre para pasarlo con tu familia o haciendo lo que amas."
            ].map((benefit, i) => (
              <div key={i} className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0 mr-4" />
                <p className="text-xl font-medium text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 & 9. WHY IT WORKS & LOGICAL PROOF */}
      <section className="py-20 px-4 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8">¿Por qué este sistema funciona cuando todo lo demás ha fallado?</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Porque ataca el problema desde dos frentes invencibles: <strong className="text-gray-900">La Psicología y La Tecnología.</strong>
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-red-600">1. La Psicología (Tu Mente)</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminamos la fricción. Cuando sabes exactamente el "por qué" procrastinas, puedes desactivar ese mecanismo. Te damos tareas tan simples que es imposible no hacerlas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-red-600">2. La Tecnología (La IA)</h3>
              <p className="text-gray-600 leading-relaxed">
                La IA no se cansa. No procrastina. No tiene "bloqueos creativos". Cuando delegas el trabajo pesado (escribir, idear, planear) a la IA, tu única tarea es dirigir. <strong className="text-gray-900">Tú eres el CEO, la IA es tu empleado estrella que trabaja gratis 24/7.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TRANSFORMATION (BEFORE / AFTER) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">Tu vida está a punto de cambiar</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-red-50 p-8 rounded-3xl border border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white font-bold px-4 py-1 rounded-bl-xl">ANTES</div>
              <h3 className="text-2xl font-bold text-red-900 mb-6 mt-4">La vieja forma:</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-red-800"><span className="mr-3 text-2xl">❌</span> Frustrado y estancado.</li>
                <li className="flex items-center text-red-800"><span className="mr-3 text-2xl">❌</span> Perdiendo horas en redes sociales.</li>
                <li className="flex items-center text-red-800"><span className="mr-3 text-2xl">❌</span> Abrumado por no saber por dónde empezar.</li>
                <li className="flex items-center text-red-800"><span className="mr-3 text-2xl">❌</span> Cero ventas, cero clientes, cero ingresos.</li>
                <li className="flex items-center text-red-800"><span className="mr-3 text-2xl">❌</span> Trabajando duro pero sin resultados.</li>
              </ul>
            </div>
            
            <div className="flex-1 bg-green-50 p-8 rounded-3xl border border-green-100 relative shadow-xl transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-green-500 text-white font-bold px-4 py-1 rounded-bl-xl">DESPUÉS</div>
              <h3 className="text-2xl font-bold text-green-900 mb-6 mt-4">Con el Sistema Anti-Procrastinación + IA:</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-green-800"><span className="mr-3 text-2xl">✅</span> Enfocado y productivo desde el minuto 1.</li>
                <li className="flex items-center text-green-800"><span className="mr-3 text-2xl">✅</span> Creando contenido viral en 5 minutos con IA.</li>
                <li className="flex items-center text-green-800"><span className="mr-3 text-2xl">✅</span> Con un plan claro y paso a paso a seguir.</li>
                <li className="flex items-center text-green-800"><span className="mr-3 text-2xl">✅</span> Cerrando ventas por WhatsApp fácilmente.</li>
                <li className="flex items-center text-green-800"><span className="mr-3 text-2xl">✅</span> Construyendo un negocio rentable en tu tiempo libre.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12. BONUSES */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Actúa hoy y llévate estos BONOS GRATIS</h2>
          <p className="text-xl text-gray-600 mb-12">Solo disponibles si compras en esta página ahora mismo.</p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-400">
              <div className="uppercase text-yellow-600 font-bold text-sm tracking-wider mb-2">Bono Exclusivo #1</div>
              <h3 className="text-2xl font-bold mb-4">Checklist de Productividad Diaria</h3>
              <p className="text-gray-600 mb-4">La hoja de ruta exacta de 15 minutos que uso cada mañana para programar mi cerebro para el éxito y garantizar que lo más importante se haga.</p>
              <p className="font-bold text-gray-900">Valor normal: <span className="line-through text-gray-400">$27 USD</span> <span className="text-green-600 ml-2">GRATIS</span></p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-400">
              <div className="uppercase text-yellow-600 font-bold text-sm tracking-wider mb-2">Bono Exclusivo #2</div>
              <h3 className="text-2xl font-bold mb-4">Bóveda de Actualizaciones de Prompts</h3>
              <p className="text-gray-600 mb-4">La IA cambia rápido. Tendrás acceso de por vida a los nuevos comandos y prompts que descubramos y probemos en nuestros propios negocios.</p>
              <p className="font-bold text-gray-900">Valor normal: <span className="line-through text-gray-400">$47 USD</span> <span className="text-green-600 ml-2">GRATIS</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. PRICE & 15. CTA */}
      <section id="precio" className="py-24 px-4 bg-gray-50 text-gray-900 relative">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Resumamos todo lo que te llevas:</h2>
          
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl mb-10 text-left">
            <ul className="space-y-4 text-lg text-gray-700 mb-8">
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Ebook "Venciendo la Procrastinación"</span>
                <span className="font-bold">$47</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Ebook "IA Express – Kit de Automatización"</span>
                <span className="font-bold">$67</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Prompts Listos Para Usar</span>
                <span className="font-bold">$37</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Guiones de Ventas (WhatsApp y MD)</span>
                <span className="font-bold">$47</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Estrategia Simple de Negocio Online</span>
                <span className="font-bold">$97</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2 text-amber-600 font-medium">
                <span>Bono 1: Checklist de Productividad</span>
                <span className="font-bold">$27</span>
              </li>
              <li className="flex justify-between pb-2 text-amber-600 font-medium">
                <span>Bono 2: Bóveda de Actualizaciones</span>
                <span className="font-bold">$47</span>
              </li>
            </ul>
            
            <div className="flex justify-between items-end mb-8">
              <span className="text-xl text-gray-500">Valor Total:</span>
              <span className="text-3xl font-bold text-gray-400 line-through decoration-red-500 decoration-4">$369 USD</span>
            </div>
            
            <div className="text-center bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
              <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Precio Especial Hoy</p>
              <div className="text-6xl md:text-8xl font-black text-gray-900">$6.90 <span className="text-2xl md:text-4xl text-gray-500 font-normal">USD</span></div>
              <p className="text-gray-600 mt-2">Pago único. Acceso de por vida.</p>
            </div>
            
            <a href="https://pay.hotmart.com/J104876487Y?checkoutMode=10" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-6 px-8 rounded-2xl transition-all hover:scale-[1.02] shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
              SÍ, QUIERO ACCESO INMEDIATO
            </a>
            <p className="text-center text-gray-500 text-sm mt-4">
              Literalmente, el precio de una pizza. Pero esto puede cambiar tu vida.
            </p>
          </div>
        </div>
      </section>

      {/* 13. GUARANTEE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-3xl border border-gray-200">
          <div className="w-32 h-32 shrink-0 bg-yellow-100 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-16 h-16 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-3">Garantía Incondicional de 7 Días</h3>
            <p className="text-gray-700 leading-relaxed">
              Estoy tan seguro de que este sistema funcionará para ti, que asumo todo el riesgo. Compra hoy, revisa todo el material, usa los prompts. Si en 7 días sientes que esto no vale por lo menos 10 veces lo que pagaste, envíame un correo y te devolveré cada centavo. Sin preguntas. Sin resentimientos.
            </p>
          </div>
        </div>
      </section>

      {/* 16. FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Preguntas Frecuentes (FAQ)</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <FAQItem 
              question="¿Es un pago único o una suscripción mensual?" 
              answer="Es un pago ÚNICO de $6.90 USD. No hay cobros ocultos ni suscripciones mensuales. Pagas una vez y tienes acceso de por vida a todo el material y sus futuras actualizaciones."
            />
            <FAQItem 
              question="¿Cómo accedo al material una vez que pago?" 
              answer="Inmediatamente después de procesar tu pago seguro a través de Hotmart, recibirás un correo electrónico con tus datos de acceso a nuestra plataforma privada donde podrás descargar y ver todo el contenido al instante."
            />
            <FAQItem 
              question="No tengo experiencia previa. ¿Esto es para mí?" 
              answer="Absolutamente. El sistema fue diseñado específicamente para principiantes. No usamos jerga técnica complicada. Te llevamos de la mano desde cero hasta que tengas tu estrategia lista usando IA."
            />
            <FAQItem 
              question="No sé usar Inteligencia Artificial, ¿es muy difícil?" 
              answer="Si sabes enviar un mensaje por WhatsApp, sabes usar este sistema. Te entregamos los 'prompts' (comandos) exactos. Solo tienes que copiarlos, pegarlos en ChatGPT u otra IA, y ver cómo hace el trabajo por ti."
            />
            <FAQItem 
              question="Ya he comprado otros cursos que no funcionaron. ¿Por qué esto es diferente?" 
              answer="Los otros cursos te daban información y esperaban que tú hicieras todo el trabajo duro (por eso procrastinabas). Este sistema te da la información Y te enseña a delegar la ejecución a la Inteligencia Artificial. Es la diferencia entre aprender a construir un auto y que te den las llaves de uno ya hecho."
            />
            <FAQItem 
              question="No tengo tiempo. Trabajo todo el día." 
              answer="¡Esa es exactamente la razón por la que necesitas esto! La IA te permite hacer en 15 minutos lo que a una persona normal le tomaría 4 horas. Está diseñado para construirse dedicando menos de 1-2 horas al día."
            />
            <FAQItem 
              question="No tengo mucho dinero para invertir." 
              answer="El sistema completo cuesta solo $6.90 USD. Es menos de lo que gastas en una salida a comer o en un par de cafés. Además, las herramientas de IA que recomendamos tienen versiones gratuitas muy potentes. No necesitas gastar más para empezar."
            />
            <FAQItem 
              question="¿Esto funcionará para mi nicho o idea?" 
              answer="Sí. Los principios de la psicología de ventas y los prompts de IA son universales. Ya sea que quieras vender servicios, productos digitales, afiliación o asesorías, la IA se adaptará a tu nicho específico."
            />
            <FAQItem 
              question="¿Tienen soporte si tengo dudas?" 
              answer="¡Por supuesto! Dentro de la plataforma tendrás acceso a nuestro correo de soporte directo donde nuestro equipo estará listo para ayudarte con cualquier obstáculo que encuentres en tu camino."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-red-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">El tiempo sigue pasando.</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Puedes cerrar esta página y seguir exactamente igual que ayer... o puedes invertir $6.90 hoy y dejar que la IA trabaje para ti mañana.
          </p>
          <a href="https://pay.hotmart.com/J104876487Y?checkoutMode=10" className="inline-block bg-white text-red-600 font-black text-2xl py-5 px-10 rounded-full transition-transform hover:scale-105 shadow-xl">
            SÍ, ESTOY LISTO PARA EMPEZAR
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-gray-500 text-center py-8 text-sm border-t border-gray-200">
        <p>© {new Date().getFullYear()} Sistema Anti-Procrastinación + IA. Todos los derechos reservados.</p>
        <p className="mt-2 text-xs">Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.</p>
      </footer>
    </div>
  );
}
