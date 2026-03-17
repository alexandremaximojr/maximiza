import React, { useState } from 'react';
import {
  Button,
  Card,
  Badge,
  Heading,
  Text,
  GradientText,
  Input,
  FormGroup,
  Avatar,
  Alert,
  Tabs,
  Textarea,
  Skeleton,
  SkeletonCard,
  Select,
  Dialog,
} from '../design-system';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const Section = ({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24 py-12 border-b border-gray-100 last:border-0">
    <div className="mb-8">
      <h2 className="text-2xl font-bold font-heading text-brand-navy">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-brand-gray font-body">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold font-body text-brand-gray uppercase tracking-widest mb-3">{children}</p>
);

const CodeTag = ({ children }: { children: React.ReactNode }) => (
  <code className="text-xs bg-gray-100 text-brand-navy px-2 py-0.5 rounded font-mono">{children}</code>
);

// ─── Sections ─────────────────────────────────────────────────────────────────

const ColorsSection = () => {
  const brandColors = [
    { name: 'primary', hex: '#5B9CFF', label: 'Primary', desc: 'CTAs, links, destaques' },
    { name: 'cyan', hex: '#4FACFE', label: 'Cyan', desc: 'Acentos tech' },
    { name: 'green', hex: '#90FF9F', label: 'Green', desc: 'Sucesso, métricas' },
    { name: 'navy', hex: '#0F1848', label: 'Navy', desc: 'Fundo dark principal' },
    { name: 'navy-corp', hex: '#0E2A56', label: 'Navy Corp', desc: 'Fundo dark secundário' },
    { name: 'navy-deep', hex: '#1B365D', label: 'Navy Deep', desc: 'Cards dark' },
    { name: 'gray', hex: '#64748B', label: 'Gray', desc: 'Texto muted' },
    { name: 'off-white', hex: '#F8FAFC', label: 'Off White', desc: 'Fundo light' },
  ];

  const semanticColors = [
    { label: 'Success', hex500: '#38A169', hex100: '#C6F6D5', hex50: '#F0FFF4' },
    { label: 'Warning', hex500: '#D97706', hex100: '#FEF3C7', hex50: '#FFFBEB' },
    { label: 'Error', hex500: '#E53E3E', hex100: '#FED7D7', hex50: '#FFF5F5' },
    { label: 'Info', hex500: '#3182CE', hex100: '#BEE3F8', hex50: '#EBF8FF' },
  ];

  const gradients = [
    { label: 'Brand', css: 'linear-gradient(135deg, #5B9CFF, #4FACFE)', class: 'bg-gradient-brand' },
    { label: 'Success', css: 'linear-gradient(135deg, #90FF9F, #4FACFE)', class: 'bg-gradient-success' },
    { label: 'Dark', css: 'linear-gradient(180deg, #0F1848 0%, #0E2A56 100%)', class: 'bg-gradient-dark' },
  ];

  return (
    <Section id="colors" title="Cores" subtitle="Paleta de cores da marca e cores semânticas para feedback.">
      <div className="space-y-10">
        <div>
          <Label>Cores da Marca</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brandColors.map((c) => (
              <div key={c.name} className="group">
                <div
                  className="h-20 rounded-xl mb-2 border border-black/5 shadow-sm"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="text-sm font-semibold text-brand-navy">{c.label}</p>
                <p className="text-xs text-brand-gray">{c.desc}</p>
                <CodeTag>{c.hex}</CodeTag>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label>Cores Semânticas</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {semanticColors.map((s) => (
              <div key={s.label}>
                <p className="text-sm font-semibold text-brand-navy mb-2">{s.label}</p>
                <div className="flex gap-1 mb-2">
                  {[s.hex50, s.hex100, s.hex500].map((hex) => (
                    <div key={hex} className="flex-1 h-10 rounded-lg border border-black/5" style={{ backgroundColor: hex }} />
                  ))}
                </div>
                <div className="flex gap-2 text-xs text-brand-gray">
                  <span>50</span><span>100</span><span>500</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label>Gradientes</Label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {gradients.map((g) => (
              <div key={g.label}>
                <div className={`h-16 rounded-xl mb-2 ${g.class}`} />
                <p className="text-sm font-semibold text-brand-navy">{g.label}</p>
                <CodeTag>{g.class}</CodeTag>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const TypographySection = () => (
  <Section id="typography" title="Tipografia" subtitle="Plus Jakarta Sans (headings) + Inter (body).">
    <div className="space-y-10">
      <div>
        <Label>Headings — Plus Jakarta Sans</Label>
        <div className="space-y-4 bg-gray-50 rounded-2xl p-6">
          {([1, 2, 3, 4] as const).map((level) => (
            <div key={level} className="flex items-baseline gap-4">
              <span className="text-xs text-brand-gray w-5 shrink-0">H{level}</span>
              <Heading level={level} className="text-brand-navy">
                {level === 1 && 'Democratizamos IA'}
                {level === 2 && 'Soluções para o seu negócio'}
                {level === 3 && 'Como funciona'}
                {level === 4 && 'Agente IA Ativo'}
              </Heading>
            </div>
          ))}
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-brand-gray w-5 shrink-0">↗</span>
            <Heading level={2} gradient>Texto com gradiente</Heading>
          </div>
        </div>
      </div>

      <div>
        <Label>Body Text — Inter</Label>
        <div className="space-y-3 bg-gray-50 rounded-2xl p-6">
          {(['xl', 'lg', 'base', 'sm'] as const).map((size) => (
            <div key={size} className="flex items-start gap-4">
              <span className="text-xs text-brand-gray w-8 shrink-0 mt-1">{size}</span>
              <Text size={size} className="text-brand-navy">
                Transforme sua empresa com IA, Automação e Dados.
              </Text>
            </div>
          ))}
          <div className="flex items-start gap-4">
            <span className="text-xs text-brand-gray w-8 shrink-0 mt-1">muted</span>
            <Text muted className="text-brand-navy">
              Texto muted para informações secundárias.
            </Text>
          </div>
        </div>
      </div>

      <div>
        <Label>Gradient Text</Label>
        <div className="bg-brand-navy rounded-2xl p-6">
          <p className="font-heading text-3xl font-bold">
            <GradientText>alavanca estratégica</GradientText>{' '}
            <span className="text-white">para seu negócio</span>
          </p>
        </div>
      </div>
    </div>
  </Section>
);

const ButtonsSection = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Section id="buttons" title="Botões" subtitle="5 variantes × 4 tamanhos + estados de loading e fullWidth.">
      <div className="space-y-10">
        <div>
          <Label>Variantes</Label>
          <div className="flex flex-wrap gap-4 items-center p-6 bg-brand-navy rounded-2xl">
            <Button variant="primary">Primary</Button>
            <Button variant="cta">CTA</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center p-6 bg-gray-50 rounded-2xl mt-2">
            <Button variant="outline">Outline</Button>
          </div>
        </div>

        <div>
          <Label>Tamanhos</Label>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>

        <div>
          <Label>Estados</Label>
          <div className="flex flex-wrap gap-4 items-center">
            <Button loading={loading} onClick={handleLoadingDemo} variant="primary">
              {loading ? 'Enviando...' : 'Clique para carregar'}
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        <div>
          <Label>Full Width</Label>
          <div className="max-w-xs">
            <Button fullWidth variant="cta">Agendar Diagnóstico Gratuito →</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const CardsSection = () => (
  <Section id="cards" title="Cards" subtitle="4 variantes para diferentes contextos de fundo.">
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-2">
          <Card variant="white" hoverable>
            <p className="text-xs text-brand-gray mb-1 uppercase tracking-widest">white</p>
            <p className="font-semibold text-brand-navy">Card branco com hover</p>
            <p className="text-sm text-brand-gray mt-1">Para seções claras (bg-off-white).</p>
          </Card>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-2">
          <Card variant="bordered">
            <p className="text-xs text-brand-primary mb-1 uppercase tracking-widest">bordered</p>
            <p className="font-semibold text-white">Card destacado</p>
            <p className="text-sm text-white/60 mt-1">Para card em destaque (featured).</p>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-brand-navy rounded-2xl p-4">
        <Card variant="glass">
          <p className="text-xs text-brand-primary mb-1 uppercase tracking-widest">glass</p>
          <p className="font-semibold text-white">Glass morphism</p>
          <p className="text-sm text-white/60 mt-1">Para fundos dark/navy.</p>
        </Card>
        <Card variant="dark">
          <p className="text-xs text-brand-cyan mb-1 uppercase tracking-widest">dark</p>
          <p className="font-semibold text-white">Card dark</p>
          <p className="text-sm text-white/60 mt-1">Navy deep para hierarquia.</p>
        </Card>
      </div>
    </div>
  </Section>
);

const BadgesSection = () => (
  <Section id="badges" title="Badges" subtitle="5 variantes para categorias, status e labels.">
    <div className="flex flex-wrap gap-3 bg-brand-navy p-6 rounded-2xl">
      <Badge variant="primary">🚀 IA que libera potencial</Badge>
      <Badge variant="success">✓ ROI 300%</Badge>
      <Badge variant="cyan">⚡ Tech</Badge>
      <Badge variant="warning">⏳ Urgente</Badge>
      <Badge variant="neutral">Em breve</Badge>
    </div>
  </Section>
);

const InputsSection = () => {
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  return (
    <Section id="inputs" title="Inputs & Formulários" subtitle="Campos com label, helper text, estados de erro e sucesso.">
      <div className="max-w-lg space-y-8">
        <div>
          <Label>Variante — Default</Label>
          <Input
            label="E-mail corporativo"
            type="email"
            placeholder="voce@empresa.com"
            helperText="Usaremos este e-mail para enviar o diagnóstico."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label>Variante — Error</Label>
          <Input
            label="Telefone"
            type="tel"
            placeholder="+55 11 99999-9999"
            variant="error"
            errorMessage="Número de telefone inválido."
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>

        <div>
          <Label>Variante — Success</Label>
          <Input
            label="CNPJ"
            type="text"
            placeholder="00.000.000/0001-00"
            variant="success"
            helperText="CNPJ verificado com sucesso."
            defaultValue="12.345.678/0001-99"
          />
        </div>

        <div>
          <Label>FormGroup — Agrupamento</Label>
          <FormGroup>
            <Input label="Nome completo" type="text" placeholder="Alexandre Maximo" />
            <Input label="E-mail" type="email" placeholder="voce@empresa.com" />
            <Input label="Telefone" type="tel" placeholder="+55 11 99999-9999" />
            <Button variant="cta" fullWidth>Agendar Diagnóstico Gratuito →</Button>
          </FormGroup>
        </div>
      </div>
    </Section>
  );
};

const AvatarSection = () => (
  <Section id="avatars" title="Avatars" subtitle="Para depoimentos, equipe e perfis de usuário.">
    <div className="space-y-8">
      <div>
        <Label>Tamanhos</Label>
        <div className="flex items-end gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="sm" initials="AM" />
            <CodeTag>sm</CodeTag>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" initials="AM" />
            <CodeTag>md</CodeTag>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" initials="JR" />
            <CodeTag>lg</CodeTag>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="xl" initials="MX" />
            <CodeTag>xl</CodeTag>
          </div>
        </div>
      </div>

      <div>
        <Label>Formas</Label>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" initials="AM" variant="circular" />
            <CodeTag>circular</CodeTag>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" initials="AM" variant="rounded" />
            <CodeTag>rounded</CodeTag>
          </div>
        </div>
      </div>

      <div>
        <Label>Exemplo — Depoimento</Label>
        <Card variant="white" className="max-w-md !p-6">
          <div className="flex items-center gap-3 mb-3">
            <Avatar size="md" initials="RS" />
            <div>
              <p className="font-semibold text-sm text-brand-navy">Ricardo Silva</p>
              <p className="text-xs text-brand-gray">CEO, TechStart</p>
            </div>
          </div>
          <Text size="sm" className="text-brand-navy !opacity-70">
            "A maximiza.AI transformou nossa operação. Economizamos 40h por semana com automação inteligente."
          </Text>
        </Card>
      </div>
    </div>
  </Section>
);

const ShadowsSection = () => (
  <Section id="shadows" title="Sombras & Efeitos" subtitle="Box shadows, glows e efeito glass morphism.">
    <div className="space-y-8">
      <div>
        <Label>Sombras</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { label: 'card', class: 'shadow-card', bg: 'bg-white' },
            { label: 'card-hover', class: 'shadow-card-hover', bg: 'bg-white' },
            { label: 'glow-primary', class: 'shadow-glow-primary', bg: 'bg-brand-primary/20' },
            { label: 'glow-green', class: 'shadow-glow-green', bg: 'bg-brand-green/20' },
            { label: 'glow-cyan', class: 'shadow-glow-cyan', bg: 'bg-brand-cyan/20' },
          ].map((s) => (
            <div key={s.label}>
              <div className={`h-16 rounded-xl ${s.class} ${s.bg}`} />
              <CodeTag>{s.label}</CodeTag>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Glass Morphism</Label>
        <div className="bg-gradient-brand rounded-2xl p-6 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white text-sm">
            <p className="font-semibold">Glass card</p>
            <p className="opacity-70 text-xs mt-1">bg-white/10 + backdrop-blur-sm + border-white/20</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const AnimationsSection = () => (
  <Section id="animations" title="Animações" subtitle="Animações de entrada e micro-interações.">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3">
        <div className="animate-fade-in-up bg-brand-primary/10 text-brand-primary rounded-xl px-4 py-2 text-sm font-semibold">
          fade-in-up
        </div>
        <CodeTag>animate-fade-in-up</CodeTag>
        <p className="text-xs text-brand-gray text-center">0.6s ease-out — entrada de seções</p>
      </div>
      <div className="border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3">
        <div className="animate-pulse-gentle bg-gradient-success text-white rounded-xl px-4 py-2 text-sm font-semibold">
          pulse-gentle
        </div>
        <CodeTag>animate-pulse-gentle</CodeTag>
        <p className="text-xs text-brand-gray text-center">2s loop — botão CTA principal</p>
      </div>
      <div className="border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3">
        <div className="animate-float bg-brand-cyan/15 text-brand-cyan rounded-xl px-4 py-2 text-sm font-semibold">
          float
        </div>
        <CodeTag>animate-float</CodeTag>
        <p className="text-xs text-brand-gray text-center">3s loop — orbs decorativos</p>
      </div>
    </div>
  </Section>
);

// ─── Alert Section ────────────────────────────────────────────────────────────

const AlertSection = () => {
  const [dismissed, setDismissed] = useState<string | null>(null);
  const variants: Array<{ v: 'success' | 'warning' | 'error' | 'info'; title: string; msg: string }> = [
    { v: 'success', title: 'Sucesso!',   msg: 'Diagnóstico agendado com sucesso. Entraremos em contato em breve.' },
    { v: 'warning', title: 'Atenção',    msg: 'Sua sessão expirará em 5 minutos. Salve o progresso antes disso.' },
    { v: 'error',   title: 'Erro',       msg: 'Não foi possível enviar o formulário. Verifique os campos obrigatórios.' },
    { v: 'info',    title: 'Informação', msg: 'Uma nova versão do relatório está disponível para download.' },
  ];

  return (
    <Section id="alerts" title="Alertas" subtitle="Mensagens de feedback contextual com variantes semânticas.">
      <div className="space-y-3 max-w-xl">
        {variants.map(({ v, title, msg }) =>
          dismissed === v ? (
            <button
              key={v}
              onClick={() => setDismissed(null)}
              className="text-xs text-brand-gray hover:text-brand-primary transition-colors"
            >
              Restaurar alerta <CodeTag>{v}</CodeTag>
            </button>
          ) : (
            <Alert key={v} variant={v} title={title} onDismiss={() => setDismissed(v)}>
              {msg}
            </Alert>
          )
        )}
      </div>
    </Section>
  );
};

// ─── Tabs Section ─────────────────────────────────────────────────────────────

const TabsSection = () => (
  <Section id="tabs" title="Tabs" subtitle="Navegação por abas com indicador animado via Framer Motion.">
    <div className="max-w-lg">
      <Tabs
        tabs={[
          {
            id: 'overview',
            label: 'Visão Geral',
            content: (
              <Card variant="white" className="!p-5">
                <Text size="sm" className="text-brand-navy">
                  Painel consolidado com métricas de IA, automações ativas e relatórios de ROI em tempo real.
                </Text>
              </Card>
            ),
          },
          {
            id: 'analytics',
            label: 'Analytics',
            content: (
              <Card variant="white" className="!p-5">
                <Text size="sm" className="text-brand-navy">
                  Análise profunda de conversões, churn, LTV e performance dos agentes de IA por canal.
                </Text>
              </Card>
            ),
          },
          {
            id: 'settings',
            label: 'Config',
            content: (
              <Card variant="white" className="!p-5">
                <Text size="sm" className="text-brand-navy">
                  Personalize integrações, webhooks, notificações e permissões de usuário.
                </Text>
              </Card>
            ),
          },
        ]}
      />
    </div>
  </Section>
);

// ─── Select Section ───────────────────────────────────────────────────────────

const SelectSection = () => (
  <Section id="selects" title="Select" subtitle="Campo de seleção acessível com estados de validação.">
    <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
      <Select
        label="Setor da empresa"
        placeholder="Selecione um setor..."
        options={[
          { value: 'tech',    label: 'Tecnologia' },
          { value: 'finance', label: 'Financeiro' },
          { value: 'health',  label: 'Saúde' },
          { value: 'retail',  label: 'Varejo' },
        ]}
        hint="Usamos isso para personalizar sua proposta."
      />
      <Select
        label="Tamanho da equipe"
        placeholder="Selecione..."
        options={[
          { value: '1-10',    label: '1–10 pessoas' },
          { value: '11-50',   label: '11–50 pessoas' },
          { value: '51-200',  label: '51–200 pessoas' },
          { value: '200+',    label: '200+ pessoas' },
        ]}
        error="Campo obrigatório"
      />
    </div>
  </Section>
);

// ─── Textarea Section ─────────────────────────────────────────────────────────

const TextareaSection = () => (
  <Section id="textareas" title="Textarea" subtitle="Campo de texto multilinha com contagem de caracteres e estados.">
    <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
      <Textarea
        label="Descreva seu principal desafio"
        placeholder="Ex: Processos manuais que consomem muitas horas da equipe..."
        rows={4}
        hint="Seja específico para recebermos uma proposta personalizada."
        maxLength={300}
      />
      <Textarea
        label="Observações adicionais"
        placeholder="Qualquer informação relevante..."
        rows={4}
        error="A mensagem não pode estar vazia."
      />
    </div>
  </Section>
);

// ─── Skeleton Section ─────────────────────────────────────────────────────────

const SkeletonSection = () => (
  <Section id="skeleton" title="Skeleton" subtitle="Estados de loading com animação pulse. Respeita prefers-reduced-motion.">
    <div className="space-y-8">
      <div>
        <Label>Skeleton Card</Label>
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
      <div>
        <Label>Skeleton Inline</Label>
        <div className="max-w-sm space-y-3">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton lines={4} />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      </div>
    </div>
  </Section>
);

// ─── Dialog Section ───────────────────────────────────────────────────────────

const DialogSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section id="dialog" title="Dialog / Modal" subtitle="Modal acessível com foco trap, Escape para fechar e animação de entrada.">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" onClick={() => setOpen(true)}>
          Abrir Dialog
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Agendar Diagnóstico Gratuito"
      >
        <p className="text-sm text-brand-gray font-body -mt-2 mb-4">
          Preencha suas informações e nossa equipe entrará em contato em até 24h para definir o melhor horário.
        </p>
        <div className="space-y-4 mt-4">
          <FormGroup label="Nome completo" required>
            <Input placeholder="Seu nome" />
          </FormGroup>
          <FormGroup label="E-mail corporativo" required>
            <Input type="email" placeholder="voce@empresa.com" />
          </FormGroup>
          <Select
            label="Setor"
            placeholder="Selecione..."
            options={[
              { value: 'tech',    label: 'Tecnologia' },
              { value: 'finance', label: 'Financeiro' },
              { value: 'health',  label: 'Saúde' },
            ]}
          />
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="cta" onClick={() => setOpen(false)}>Enviar</Button>
          </div>
        </div>
      </Dialog>
    </Section>
  );
};

// ─── Sidebar Nav ──────────────────────────────────────────────────────────────

const navItems = [
  { id: 'colors',     label: 'Cores' },
  { id: 'typography', label: 'Tipografia' },
  { id: 'buttons',    label: 'Botões' },
  { id: 'cards',      label: 'Cards' },
  { id: 'badges',     label: 'Badges' },
  { id: 'inputs',     label: 'Inputs' },
  { id: 'avatars',    label: 'Avatars' },
  { id: 'alerts',     label: 'Alertas' },
  { id: 'tabs',       label: 'Tabs' },
  { id: 'selects',    label: 'Select' },
  { id: 'textareas',  label: 'Textarea' },
  { id: 'skeleton',   label: 'Skeleton' },
  { id: 'dialog',     label: 'Dialog' },
  { id: 'shadows',    label: 'Sombras' },
  { id: 'animations', label: 'Animações' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export const DesignSystemPage = () => {
  const [active, setActive] = useState('colors');

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-off-white">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 h-14 bg-white border-b border-gray-200 flex items-center px-6 gap-4">
        <a href="/" className="text-xs text-brand-gray hover:text-brand-primary transition-colors font-body">
          ← Site
        </a>
        <div className="h-4 w-px bg-gray-200" />
        <span className="font-heading font-bold text-brand-navy text-sm">maximiza.AI</span>
        <span className="text-brand-gray text-sm font-body">/ Design System</span>
        <Badge variant="primary" className="ml-auto text-xs !py-1 !px-3">v1.1</Badge>
      </header>

      <div className="flex pt-14">
        {/* Sidebar */}
        <nav className="hidden md:flex flex-col w-52 shrink-0 fixed top-14 bottom-0 overflow-y-auto border-r border-gray-200 bg-white px-4 py-6 gap-1">
          <p className="text-xs font-semibold text-brand-gray uppercase tracking-widest mb-3 px-2">Componentes</p>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left text-sm font-body px-3 py-2 rounded-lg transition-all ${
                active === item.id
                  ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                  : 'text-brand-navy hover:bg-gray-50 hover:text-brand-primary'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="text-xs text-brand-gray px-2">Fontes</p>
            <p className="text-xs font-semibold text-brand-navy px-2 mt-1 font-heading">Plus Jakarta Sans</p>
            <p className="text-xs font-semibold text-brand-navy px-2 font-body">Inter</p>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 md:ml-52 px-6 md:px-12 py-8 max-w-4xl">
          {/* Hero */}
          <div className="mb-12 pb-12 border-b border-gray-100">
            <Badge variant="primary" className="mb-4">Design System</Badge>
            <Heading level={1} gradient className="mb-3">Manual da Marca</Heading>
            <Text size="lg" muted className="text-brand-navy max-w-xl">
              Guia visual completo dos componentes, tokens e padrões da maximiza.AI.
              Use como referência para design, desenvolvimento e treinamento de agentes de IA.
            </Text>
          </div>

          <ColorsSection />
          <TypographySection />
          <ButtonsSection />
          <CardsSection />
          <BadgesSection />
          <InputsSection />
          <AvatarSection />
          <AlertSection />
          <TabsSection />
          <SelectSection />
          <TextareaSection />
          <SkeletonSection />
          <DialogSection />
          <ShadowsSection />
          <AnimationsSection />
        </main>
      </div>
    </div>
  );
};
