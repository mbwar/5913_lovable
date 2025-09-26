import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Scale, Book, AlertTriangle, FileCheck } from "lucide-react";
import {
  trcArticles,
  rcdArticles,
  commonArticles,
  summaryColumns,
  type ArticleDefinition,
  type SummaryColumnDefinition,
} from "@/content/law-reference";

const renderArticles = (articles: ArticleDefinition[]) => (
  <Accordion type="single" collapsible className="w-full">
    {articles.map((article) => (
      <AccordionItem key={article.id} value={article.id}>
        <AccordionTrigger className="text-left">
          <div className="flex items-center space-x-2">
            <Badge variant={article.badgeVariant ?? "outline"} className={article.badgeClassName}>
              {article.badgeText}
            </Badge>
            <span>{article.title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>{article.content}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const summaryIconMap: Record<SummaryColumnDefinition["icon"], typeof AlertTriangle> = {
  AlertTriangle,
  FileCheck,
};

const LawReference = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
          <CardTitle className="flex items-center space-x-3">
            <Scale className="h-6 w-6" />
            <span>Références Législatives</span>
          </CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Textes complets de la loi 59-13 et dispositions du code des assurances
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="trc-articles" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="trc-articles">TRC (157-1 à 157-9)</TabsTrigger>
          <TabsTrigger value="rcd-articles">RC Décennale (157-10 à 157-17)</TabsTrigger>
          <TabsTrigger value="common-articles">Dispositions communes</TabsTrigger>
          <TabsTrigger value="summary">Résumé pratique</TabsTrigger>
        </TabsList>

        <TabsContent value="trc-articles" className="space-y-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>Chapitre Premier - L'Assurance Tous Risques Chantier</span>
              </CardTitle>
              <CardDescription>Articles 157-1 à 157-9</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="art-157-1">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Article 157-1</Badge>
                        <span>Obligations d'assurance</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg text-sm">
                        <p className="mb-3">
                          Le maitre de l'ouvrage qui réalise ou fait réaliser des travaux de construction doit être couvert, 
                          pendant la durée du chantier, par une assurance garantissant les dommages affectant l'ouvrage.
                        </p>
                        <p className="mb-3">
                          L'architecte, l'ingénieur ainsi que toute personne physique ou morale ayant conclu avec ledit maitre 
                          de l'ouvrage un contrat de louage d'ouvrage au sens du 2ème alinéa de l'article 723 du dahir du 
                          9 ramadan 1331 (12 août 1913) formant code des obligations et des contrats ou un contrat de prestation 
                          de service autre qu'un contrat de travail, doivent être couverts par une assurance garantissant, 
                          pendant la durée du chantier, leur responsabilité civile en raison des dommages causés aux tiers 
                          ou à l'ouvrage du fait ou à l'occasion des travaux dans le chantier.
                        </p>
                        <p>
                          La garantie visée au 1er alinéa est dénommée « garantie dommages à l'ouvrage » et la garantie 
                          visée au 2ème alinéa est dénommée « garantie responsabilité civile chantier ».
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-2">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Article 157-2</Badge>
                        <span>Garantie dommages à l'ouvrage - Exclusions</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          L'obligation d'assurance, pour « la garantie dommages à l'ouvrage », s'applique à la réparation 
                          des dommages à l'ouvrage ainsi qu'aux matériaux de construction et aux matériels destinés à être 
                          incorporés dans l'ouvrage, à l'exclusion :
                        </p>
                        <ul className="list-decimal list-inside space-y-1 ml-4">
                          <li>des dommages et pertes occasionnés par les tremblements de terre, les ouragans, les éruptions volcaniques, les crues ou les inondations ;</li>
                          <li>des dommages et pertes occasionnés par la guerre étrangère, la guerre civile, les émeutes et mouvements populaires ou les actes de terrorisme ou de sabotage;</li>
                          <li>des dommages et pertes dus aux risques atomiques ou nucléaires ;</li>
                          <li>des dommages et pertes résultant de la corrosion, de l'oxydation ou de l'usure ;</li>
                          <li>des dommages et pertes occasionnés par une tempête ou par des dégâts des eaux survenus en rapport avec la tempête ;</li>
                          <li>des dommages et des pertes occasionnés par les réparations provisoires pour lesquelles l'assureur n'a pas donné son accord préalable;</li>
                          <li>des manquants constatés à l'occasion d'un inventaire des matériaux et matériels de construction autres que ceux résultant du vol par effraction.</li>
                        </ul>
                        <p className="mt-3 font-medium">
                          Le contrat d'assurance peut stipuler d'autres exclusions de garantie dont la liste est fixée par voie réglementaire sur proposition de l'Autorité.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-3">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Article 157-3</Badge>
                        <span>Plafonds et franchises</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          Le contrat d'assurance peut comporter un plafond pour « la garantie dommages à l'ouvrage ». 
                          Le montant minimum dudit plafond est fixé par voie réglementaire sur proposition de l'Autorité 
                          en fonction notamment du montant des travaux de construction, de la nature de l'ouvrage ou de sa destination.
                        </p>
                        <p>
                          « La garantie dommages à l'ouvrage » peut être assortie d'une franchise. Les conditions de 
                          détermination de cette franchise sont fixées par l'Administration sur proposition de l'Autorité.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-4">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Article 157-4</Badge>
                        <span>Garantie RC chantier - Exclusions</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          L'obligation d'assurance s'applique, pour « la garantie responsabilité civile chantier », 
                          à la réparation des dommages causés à toute personne, à l'exclusion :
                        </p>
                        <ul className="list-decimal list-inside space-y-1 ml-4">
                          <li>des dommages consécutifs aux caractéristiques du sol, lorsque l'étude de sol n'a pas été effectuée avant le démarrage des travaux ou lorsque ces dommages résultent du non-respect des recommandations figurant dans ladite étude ;</li>
                          <li>des dommages résultant des vibrations, de la suppression ou de l'affaiblissement des points d'appui des ouvrages mitoyens à l'ouvrage assuré comportant cinq (5) étages ou plus et ayant un niveau de sous-sol inférieur aux niveaux des sous-sol des ouvrages mitoyens, lorsque l'étude de mitoyenneté n'a pas été effectuée ou lorsque ces dommages résultent du non-respect des recommandations de ladite étude ;</li>
                          <li>des dommages causés par un véhicule soumis à l'obligation d'assurance prévue à l'article 120 ci-dessus, autres que ceux résultant du fonctionnement de bennes basculantes, grues et autres appareils dont est muni le véhicule, lorsqu'il est immobilisé pour effectuer des travaux de chantier ; et causés par tout véhicule spécialement construit ou adapté pour réaliser des travaux de chantier à l'occasion de son utilisation pour effectuer de tels travaux.</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-5">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Article 157-5</Badge>
                        <span>Définition des tiers</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          On entend par tiers visé au 2ème alinéa de l'article 157-1 ci-dessus, toute personne à l'exclusion:
                        </p>
                        <ul className="list-decimal list-inside space-y-1 ml-4">
                          <li>du maitre de l'ouvrage;</li>
                          <li>de l'ingénieur, de l'architecte et de toute personne intervenant sur le chantier et ayant conclu avec le maitre de l'ouvrage un contrat de louage d'ouvrage ou un contrat de prestation de service autre qu'un contrat de travail ainsi que les sous-traitants intervenant sur le chantier ;</li>
                          <li>des représentants légaux des personnes morales visées aux 1° et 2° du présent article ;</li>
                          <li>pendant leur service, des salariés ou préposés des personnes visées aux 1° et 2° du présent article pour les dommages corporels.</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-6">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Article 157-6</Badge>
                        <span>Montants de garantie RC chantier</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          Le montant, par chantier et par événement, de « la garantie responsabilité civile chantier » 
                          ne peut être inférieur à un montant qui varie entre quatre millions (4.000.000) de dirhams 
                          et quarante millions (40.000.000) de dirhams.
                        </p>
                        <p>
                          Les modalités de détermination du montant minimum de garantie sont fixées par voie réglementaire 
                          sur proposition de l'Autorité.
                        </p>
                        <p>
                          « La garantie responsabilité civile chantier » peut être assortie d'une franchise. 
                          En aucun cas, cette franchise ne peut être opposée ni aux tiers ni au maître de l'ouvrage 
                          en ce qui concerne les dommages causés à l'ouvrage.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-7">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Article 157-7</Badge>
                        <span>Nullité des clauses restrictives</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm">
                        <p>
                          Sous réserve des dispositions prévues par le livre premier de la présente loi et par le présent chapitre, 
                          est nulle et sans effet toute clause du contrat d'assurance ayant pour objet ou pour effet de réduire 
                          l'étendue des garanties objet de l'assurance tous risques chantier, telle que déterminée par ledit chapitre.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-8">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Article 157-8</Badge>
                        <span>Durée et notification</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          Tout contrat d'assurance tous risques chantier doit être souscrit pour une durée 
                          correspondant à la durée du chantier.
                        </p>
                        <p>
                          En cas de suspension ou de résiliation du contrat d'assurance visé au 1er alinéa ci-dessus, 
                          l'assureur est tenu d'en faire notification, par lettre recommandée, à l'Administration 
                          dans un délai de trente (30) jours à compter de la date de ladite suspension ou résiliation 
                          en vue de s'assurer de la satisfaction de l'obligation d'assurance visée à l'article 157-1.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-9">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Article 157-9</Badge>
                        <span>Sanctions</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <div className="bg-destructive/10 p-3 rounded">
                          <p className="font-medium mb-2">Sanction pour le maître d'ouvrage :</p>
                          <p>
                            Est passible d'une amende égale à six (6) dirhams multiplié par le nombre de mètres carrés 
                            de la superficie couverte déterminé par le permis de construire, tout maitre de l'ouvrage 
                            qui n'aura pas satisfait à l'obligation d'assurance dommages à l'ouvrage.
                          </p>
                        </div>
                        <div className="bg-destructive/10 p-3 rounded">
                          <p className="font-medium mb-2">Sanction pour les autres intervenants :</p>
                          <p>
                            Est passible d'une amende de cinq mille (5.000) à cent mille (100.000) dirhams, 
                            toute personne assujettie à l'obligation d'assurance responsabilité civile chantier 
                            qui n'aura pas satisfait à ladite obligation.
                          </p>
                        </div>
                        <p className="text-muted-foreground text-xs">
                          Ces amendes ne peuvent être appliquées qu'une seule fois par chantier.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rcd-articles" className="space-y-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-accent" />
                <span>Chapitre II - L'Assurance Responsabilité Civile Décennale</span>
              </CardTitle>
              <CardDescription>Articles 157-10 à 157-17</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="art-157-10">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent">Article 157-10</Badge>
                        <span>Obligation d'assurance RC décennale</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm">
                        <p>
                          Toute personne physique ou morale dont la responsabilité civile décennale peut être engagée 
                          en vertu de l'article 769 du dahir du 9 ramadan 1331 (12 août 1913) formant code des 
                          obligations et des contrats, doit être couverte par un contrat d'assurance garantissant cette responsabilité.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-11">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent">Article 157-11</Badge>
                        <span>Couverture et exclusions</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          L'obligation d'assurance responsabilité civile décennale s'applique à la réparation 
                          de tous les dommages à l'ouvrage à l'exclusion:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>des dommages et pertes occasionnés par la guerre étrangère, la guerre civile, les émeutes et mouvements populaires ou les actes de terrorisme ou de sabotage;</li>
                          <li>des dommages et pertes résultant de l'inobservation des réserves d'ordre technique émises par le bureau de contrôle et dûment notifiées au maître de l'ouvrage, lorsque lesdites réserves n'ont pas été levées.</li>
                        </ul>
                        <p className="font-medium">
                          Le contrat d'assurance peut stipuler d'autres exclusions de garantie dont la liste 
                          est fixée par voie réglementaire sur proposition de l'Autorité.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-12">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent">Article 157-12</Badge>
                        <span>Plafonds et franchises</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          Le contrat d'assurance responsabilité civile décennale peut comporter un plafond de garantie. 
                          Le montant minimum dudit plafond est fixé par voie réglementaire sur proposition de l'Autorité 
                          en fonction notamment du montant des travaux de construction, de la nature de l'ouvrage ou de sa destination.
                        </p>
                        <p>
                          Le contrat d'assurance responsabilité civile décennale peut également stipuler une franchise. 
                          En aucun cas, cette franchise ne peut être opposée aux bénéficiaires des indemnités.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-13">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent">Article 157-13</Badge>
                        <span>Maintien de garantie</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          Nonobstant toute stipulation contraire prévue par le contrat, tout contrat d'assurance 
                          responsabilité civile décennale est réputé comporter une clause assurant le maintien de 
                          la garantie pour la même durée de la responsabilité civile prévue par l'article 769 du 
                          dahir formant code des obligations et des contrats précité.
                        </p>
                        <p>
                          En cas de suspension ou de résiliation du contrat d'assurance, l'assureur est tenu d'en 
                          faire notification, par lettre recommandée, à l'Administration dans un délai de trente (30) jours.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-14">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent">Article 157-14</Badge>
                        <span>Nullité des clauses restrictives</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm">
                        <p>
                          Est nulle et sans effet toute clause du contrat d'assurance responsabilité civile décennale 
                          ayant pour objet ou pour effet de réduire l'étendue de la garantie telle que déterminée par ce chapitre.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-15">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent">Article 157-15</Badge>
                        <span>Attestation pour permis d'habiter</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          Toute demande de permis d'habiter ou de certificat de conformité concernant un ouvrage 
                          soumis à l'obligation d'assurance RC décennale doit être accompagnée d'une attestation 
                          d'assurance datant de moins de trois (3) mois.
                        </p>
                        <p>
                          À défaut de production de cette attestation, le Président du conseil de la commune dresse 
                          un procès-verbal qu'il transmet au Procureur du Roi compétent.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-16">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent">Article 157-16</Badge>
                        <span>Sanctions RC décennale</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-destructive/10 p-4 rounded-lg text-sm">
                        <p>
                          Est passible d'une amende de dix mille (10.000) à cent mille (100.000) dirhams, 
                          toute personne assujettie à l'obligation d'assurance responsabilité civile décennale 
                          qui n'aura pas satisfait à ladite obligation.
                        </p>
                        <p className="text-muted-foreground text-xs mt-2">
                          Cette amende ne peut être appliquée qu'une seule fois par personne au titre d'un même ouvrage.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-17">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent">Article 157-17</Badge>
                        <span>Transfert de propriété</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm">
                        <p>
                          Tout acte de transfert de propriété ou de jouissance d'un ouvrage soumis à l'obligation 
                          d'assurance RC décennale, intervenant avant l'expiration du délai de dix (10) ans, 
                          doit faire mention de l'existence ou de l'absence de ladite assurance.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="common-articles" className="space-y-4">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Book className="h-5 w-5 text-success" />
                <span>Chapitre III - Dispositions Communes</span>
              </CardTitle>
              <CardDescription>Articles 157-18 à 157-25</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="art-157-18">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-success">Article 157-18</Badge>
                        <span>Champ d'application</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>Les obligations d'assurance s'appliquent à toute construction destinée à:</p>
                        <ul className="list-decimal list-inside space-y-1 ml-4">
                          <li>l'habitation lorsque cette construction comporte plus de 3 étages ou lorsque sa superficie couverte totale dépasse 800 m² ;</li>
                          <li>l'habitation et en même temps à un ou plusieurs usages visés aux 3° à 7°, lorsque cette construction comporte plus de 3 étages ou que sa superficie couverte totale dépasse 800 m² ou lorsque la superficie couverte destinée aux usages visés aux 3° à 7° dépasse 400 m²;</li>
                          <li>l'usage hôtelier, à l'hébergement ou en tant que centre d'estivage;</li>
                          <li>l'usage industriel, commercial, artisanal, de bureaux, de services ou en tant que parc de stationnement;</li>
                          <li>servir en tant que lieu de culte ou de conférences, d'établissement médical ou paramédical, d'enseignement ou d'établissement à caractère culturel ou social ;</li>
                          <li>des activités sportives ;</li>
                          <li>l'usage de gradins ou de tribunes de stade définitifs à l'exclusion de toute construction en charpentes métalliques à caractère provisoire.</li>
                        </ul>
                        <p className="font-medium">
                          Les obligations ne s'appliquent aux constructions des points 3° à 7° que lorsque la superficie dépasse 400 m².
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-19">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-success">Article 157-19</Badge>
                        <span>Exclusions du champ d'application</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>Les obligations d'assurance ne s'appliquent pas:</p>
                        <ul className="list-decimal list-inside space-y-1 ml-4">
                          <li>à tout ouvrage construit pour le compte de l'Etat ou des collectivités territoriales;</li>
                          <li>aux ouvrages maritimes, fluviaux et lacustres ;</li>
                          <li>aux équipements d'infrastructure, aux ouvrages d'art ou de génie civile notamment les routes, les autoroutes, les ponts, les barrages, les digues, les châteaux et réservoirs d'eau ;</li>
                          <li>aux ouvrages d'infrastructures routières, portuaires, aéroportuaires, héliportuaires, ferroviaires ou de voiries, aux ouvrages piétonniers, aux ouvrages de télécommunication, aux ouvrages souterrains ainsi qu'aux ouvrages de transport, de production, de stockage ou de distribution d'énergie ;</li>
                          <li>à toute modification apportée aux constructions existantes.</li>
                        </ul>
                        <div className="bg-warning/10 p-3 rounded mt-3">
                          <p className="font-medium mb-2">Exclusions supplémentaires pour la RC décennale :</p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>aux ouvrages n'ayant pas une structure porteuse en béton et/ou en béton armé et/ou en béton précontraint et/ou en acier et/ou en maçonnerie en moellons ;</li>
                            <li>aux silos, aux stations d'épuration des eaux usées, aux éoliennes et aux usines chimiques ou pétrochimiques.</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="art-157-20">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-success">Article 157-20</Badge>
                        <span>Déchéances</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-3">
                        <p>
                          Les contrats peuvent stipuler des clauses de déchéance. Toutefois, les déchéances ne sont 
                          opposables ni aux tiers ou à leurs ayants droit, ni au maitre de l'ouvrage en ce qui concerne 
                          « la garantie responsabilité civile chantier ».
                        </p>
                        <p>
                          Dans ce cas, l'assureur procède au règlement de l'indemnité pour le compte du responsable 
                          et peut exercer contre ce dernier une action en remboursement.
                        </p>
                        <p className="font-medium">
                          Toutefois, est opposable aux victimes la déchéance résultant de la suspension régulière 
                          de la garantie pour non-paiement de prime ou de cotisation.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="autres-articles">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-success">Articles 157-21 à 157-25</Badge>
                        <span>Autres dispositions</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Article 157-21 - Souscription pour compte</h4>
                          <p>Le maître d'ouvrage peut exiger des attestations ou souscrire pour le compte des intervenants.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Article 157-22 - Contrôles</h4>
                          <p>Présentation obligatoire des attestations aux agents de contrôle urbanisme.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Article 157-23 - Sanction présentation</h4>
                          <p>500 à 1 000 DH d'amende pour non-présentation des attestations.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Article 157-24 - Obligation assureurs</h4>
                          <p>Les assureurs agréés sont tenus de garantir les risques construction.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Article 157-25 - Recours en cas de refus</h4>
                          <p>Saisine de l'Autorité en cas de refus d'un assureur.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Points clés à retenir</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <h4 className="font-semibold text-primary mb-1">Double obligation</h4>
                    <p className="text-sm">TRC (pendant chantier) + RC Décennale (10 ans après réception)</p>
                  </div>
                  <div className="bg-warning/10 p-3 rounded-lg">
                    <h4 className="font-semibold text-warning mb-1">Critères de surface</h4>
                    <p className="text-sm">Habitation: {">3"} étages ou {">800"}m² | Commercial: {">400"}m²</p>
                  </div>
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <h4 className="font-semibold text-destructive mb-1">Sanctions importantes</h4>
                    <p className="text-sm">6 DH/m² (TRC MO) | 5K-100K DH (autres) | 10K-100K DH (RCD)</p>
                  </div>
                  <div className="bg-success/10 p-3 rounded-lg">
                    <h4 className="font-semibold text-success mb-1">Maintien automatique</h4>
                    <p className="text-sm">RC décennale maintenue même après résiliation contrat</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileCheck className="h-5 w-5 text-accent" />
                  <span>Procédures essentielles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <h4 className="font-semibold text-accent mb-1">Avant démarrage</h4>
                    <p className="text-sm">Vérifier éligibilité | Souscrire TRC | Présenter attestations</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <h4 className="font-semibold text-primary mb-1">Pendant chantier</h4>
                    <p className="text-sm">Maintenir TRC | Contrôles agents | Notifications résiliation</p>
                  </div>
                  <div className="bg-success/10 p-3 rounded-lg">
                    <h4 className="font-semibold text-success mb-1">À la réception</h4>
                    <p className="text-sm">Attestation RCD {" < 3"} mois | Permis habiter | Maintien 10 ans</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <h4 className="font-semibold mb-1">Transfert propriété</h4>
                    <p className="text-sm">Mention obligatoire existence/absence assurance RCD</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LawReference;