import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Clock, XCircle, AlertTriangle, FileCheck, Building } from "lucide-react";

const CivilLiability = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-accent to-accent-light text-accent-foreground">
          <CardTitle className="flex items-center space-x-3">
            <Shield className="h-6 w-6" />
            <span>Responsabilité Civile Décennale (RCD)</span>
          </CardTitle>
          <CardDescription className="text-accent-foreground/90">
            Guide complet pour l'assurance responsabilité civile décennale selon les articles 157-10 à 157-17
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Principe</TabsTrigger>
          <TabsTrigger value="coverage">Couverture</TabsTrigger>
          <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
          <TabsTrigger value="procedures">Procédures</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>Principe de base</span>
                </CardTitle>
                <CardDescription>Article 157-10</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Qui doit souscrire ?</h4>
                  <p className="text-sm text-muted-foreground">
                    Toute personne physique ou morale dont la responsabilité civile décennale 
                    peut être engagée selon l'article 769 du DOC
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Personnes concernées :</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Architectes</li>
                    <li>• Ingénieurs</li>
                    <li>• Entrepreneurs</li>
                    <li>• Bureaux d'études</li>
                    <li>• Bureaux de contrôle</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Durée et maintien</span>
                </CardTitle>
                <CardDescription>Article 157-13</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Durée de garantie</h4>
                  <p className="text-sm text-muted-foreground">
                    10 ans à compter de la réception de l'ouvrage (Article 769 DOC)
                  </p>
                </div>
                <div className="bg-warning/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Maintien automatique</h4>
                  <p className="text-sm">
                    La garantie est maintenue même en cas de résiliation du contrat
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building className="h-5 w-5 text-success" />
                <span>Exclusions spécifiques à la RC Décennale</span>
              </CardTitle>
              <CardDescription>Article 157-19 - Exclusions supplémentaires</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-warning/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-warning mb-3">Structure porteuse requise</h4>
                  <p className="text-sm">
                    La RC décennale ne s'applique qu'aux ouvrages ayant une structure porteuse en :
                  </p>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• Béton et/ou béton armé</li>
                    <li>• Béton précontraint</li>
                    <li>• Acier</li>
                    <li>• Maçonnerie en moellons</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-3">Ouvrages exclus</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Silos</li>
                    <li>• Stations d'épuration</li>
                    <li>• Éoliennes</li>
                    <li>• Usines chimiques</li>
                    <li>• Usines pétrochimiques</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span>Sanctions</span>
              </CardTitle>
              <CardDescription>Article 157-16</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-destructive/10 p-4 rounded-lg">
                <div className="text-center">
                  <h4 className="font-bold text-lg text-destructive mb-2">10 000 à 100 000 DH</h4>
                  <p className="text-sm">
                    Amende pour non-respect de l'obligation d'assurance RC décennale
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Une seule fois par personne et par ouvrage
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="coverage" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Étendue de la couverture</CardTitle>
              <CardDescription>Article 157-11 - Dommages couverts par la RC décennale</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-success/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-success mb-3">✓ Dommages couverts</h4>
                  <p className="text-sm mb-3">
                    Tous les dommages à l'ouvrage relevant de la responsabilité décennale selon l'article 769 du DOC :
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Solidité de l'ouvrage :</strong> Défauts compromettant la solidité</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Destination de l'ouvrage :</strong> Défauts rendant l'ouvrage impropre à sa destination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Éléments d'équipement :</strong> Défauts des éléments indissociables</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Plafond de garantie</h4>
                    <p className="text-sm text-muted-foreground">
                      Le montant minimum est fixé par voie réglementaire selon :
                    </p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Montant des travaux</li>
                      <li>• Nature de l'ouvrage</li>
                      <li>• Destination de l'ouvrage</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Franchise</h4>
                    <p className="text-sm text-muted-foreground">
                      Peut être prévue mais ne peut jamais être opposée aux bénéficiaires des indemnités
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exclusions" className="space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <XCircle className="h-5 w-5 text-destructive" />
                <span>Exclusions de la RC Décennale</span>
              </CardTitle>
              <CardDescription>Article 157-11 - Exclusions obligatoires</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-3">Exclusions obligatoires</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">1. Guerre et troubles</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Guerre étrangère et guerre civile</li>
                        <li>• Émeutes et mouvements populaires</li>
                        <li>• Actes de terrorisme ou sabotage</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">2. Non-respect du contrôle technique</h5>
                      <p className="text-sm text-muted-foreground">
                        Dommages résultant de l'inobservation des réserves techniques du bureau de contrôle, 
                        dûment notifiées au maître d'ouvrage et non levées
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-warning/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-warning mb-2">⚠️ Autres exclusions possibles</h4>
                  <p className="text-sm">
                    Le contrat peut stipuler d'autres exclusions dont la liste sera fixée par voie réglementaire 
                    sur proposition de l'Autorité de contrôle des assurances (Article 157-11)
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">Important</h4>
                  <p className="text-sm">
                    Toute clause ayant pour effet de réduire l'étendue de la garantie est nulle 
                    et sans effet (Article 157-14)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedures" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <span>Attestation d'assurance</span>
                </CardTitle>
                <CardDescription>Article 157-15</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Obligation</h4>
                  <p className="text-sm text-muted-foreground">
                    Toute demande de permis d'habiter ou certificat de conformité doit être accompagnée 
                    d'une attestation d'assurance datant de moins de 3 mois
                  </p>
                </div>
                <div className="bg-warning/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">En cas de défaut</h4>
                  <p className="text-sm">
                    Le Président du conseil communal dresse un procès-verbal transmis au Procureur du Roi
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-accent" />
                  <span>Transfert de propriété</span>
                </CardTitle>
                <CardDescription>Article 157-17</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mention obligatoire</h4>
                  <p className="text-sm text-muted-foreground">
                    Tout acte de transfert de propriété ou de jouissance avant l'expiration des 10 ans 
                    doit mentionner l'existence ou l'absence de l'assurance RC décennale
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Protection de l'acquéreur</h4>
                  <p className="text-sm text-muted-foreground">
                    Cette mesure vise à informer l'acquéreur de l'état des garanties sur l'ouvrage
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-success" />
                <span>Maintien de garantie</span>
              </CardTitle>
              <CardDescription>Article 157-13 - Clause de maintien obligatoire</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-success/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-success mb-3">Maintien automatique</h4>
                  <p className="text-sm mb-3">
                    Tout contrat d'assurance RC décennale est réputé comporter une clause assurant 
                    le maintien de la garantie pour la même durée que la responsabilité civile (10 ans)
                  </p>
                  <div className="bg-white/50 p-3 rounded text-sm">
                    <strong>Conséquence :</strong> Même si le contrat est résilié ou suspendu, 
                    la garantie reste acquise pour les ouvrages déjà réceptionnés
                  </div>
                </div>
                
                <div className="bg-warning/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-warning mb-2">Notification obligatoire</h4>
                  <p className="text-sm">
                    En cas de suspension/résiliation, l'assureur doit notifier l'Administration 
                    dans les 30 jours par lettre recommandée
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CivilLiability;