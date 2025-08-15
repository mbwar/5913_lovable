import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export const GeneralConditions = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Arrêté n°3202-24 du 20 décembre 2024
        </h2>
        <p className="text-muted-foreground">
          Conditions générales-type des contrats relatifs aux assurances obligatoires
        </p>
      </div>

      <Tabs defaultValue="trc" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="trc">Tous Risques Chantier</TabsTrigger>
          <TabsTrigger value="rcd">RC Décennale</TabsTrigger>
        </TabsList>

        <TabsContent value="trc" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">TRC</Badge>
                Conditions générales - Tous Risques Chantier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                <div className="space-y-6">
                  {/* Définitions */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Article 2 - Définitions</h3>
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Assuré</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Garantie dommages à l'ouvrage :</strong> le maître de l'ouvrage</li>
                          <li>• <strong>Garantie RC chantier :</strong> maître d'ouvrage, architecte, ingénieur et prestataires</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Dommage immatériel</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Pertes indirectes de toute nature y compris le chômage</li>
                          <li>• Perte pécuniaire résultant de la privation de jouissance</li>
                          <li>• Insuffisance de rendement</li>
                          <li>• Impropriété à la destination de l'ouvrage</li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Tiers</h4>
                        <p className="text-sm">Toute personne autre que :</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• Le maître de l'ouvrage</li>
                          <li>• L'ingénieur, l'architecte et prestataires</li>
                          <li>• Les représentants légaux des personnes morales</li>
                          <li>• Les salariés ou préposés (pour dommages corporels pendant service)</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Garantie Dommages à l'ouvrage */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Garantie Dommages à l'Ouvrage</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Objet de la garantie</h4>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm">Réparation des dommages causés à l'ouvrage, matériaux et matériels destinés à être incorporés + frais de démolition/déblaiement</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Exclusions (Article 4)</h4>
                        <div className="grid gap-2">
                          <Badge variant="destructive" className="text-xs">Faute intentionnelle/dolosive</Badge>
                          <Badge variant="destructive" className="text-xs">Catastrophes naturelles</Badge>
                          <Badge variant="destructive" className="text-xs">Guerre/terrorisme</Badge>
                          <Badge variant="destructive" className="text-xs">Risques atomiques</Badge>
                          <Badge variant="destructive" className="text-xs">Corrosion/oxydation/usure</Badge>
                          <Badge variant="destructive" className="text-xs">Tempête/dégâts des eaux</Badge>
                          <Badge variant="destructive" className="text-xs">Réparations non autorisées</Badge>
                          <Badge variant="destructive" className="text-xs">Manquants (sauf vol effraction)</Badge>
                          <Badge variant="destructive" className="text-xs">Non-respect réserves bureau contrôle</Badge>
                          <Badge variant="destructive" className="text-xs">Dommages immatériels</Badge>
                          <Badge variant="destructive" className="text-xs">Plans/dessins/archives</Badge>
                          <Badge variant="destructive" className="text-xs">Biens hors périmètre chantier</Badge>
                          <Badge variant="destructive" className="text-xs">Bâtiments existants</Badge>
                          <Badge variant="destructive" className="text-xs">Installations provisoires</Badge>
                          <Badge variant="destructive" className="text-xs">Remblais non compactés</Badge>
                          <Badge variant="destructive" className="text-xs">Arrêt travaux &gt; 45 jours</Badge>
                          <Badge variant="destructive" className="text-xs">Injection sols instables</Badge>
                          <Badge variant="destructive" className="text-xs">Évacuation eaux</Badge>
                          <Badge variant="destructive" className="text-xs">Glissement terrain</Badge>
                          <Badge variant="destructive" className="text-xs">Matériaux/matériels défectueux</Badge>
                          <Badge variant="destructive" className="text-xs">Données électroniques</Badge>
                          <Badge variant="destructive" className="text-xs">Cybercriminalité</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Limites de garantie</h4>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Montant travaux si &lt; 500M DH</li>
                            <li>• 500M DH si montant ≥ 500M DH</li>
                            <li>• Multi-ouvrages : somme (max 1 milliard DH)</li>
                            <li>• Frais démolition/déblaiement : min 1/10 du montant travaux</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Franchise</h4>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• % du montant dommages (max 7%)</li>
                            <li>• Montant forfaitaire (max 20.000 DH)</li>
                            <li>• Maximum des deux montants ci-dessus</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Garantie RC Chantier */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Garantie Responsabilité Civile Chantier</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Objet de la garantie</h4>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• RC pour dommages corporels/matériels/immatériels consécutifs causés aux tiers</li>
                            <li>• RC pour dommages à l'ouvrage (sauf maître d'ouvrage)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Exclusions principales</h4>
                        <div className="grid gap-2">
                          <Badge variant="destructive" className="text-xs">Faute intentionnelle/dolosive</Badge>
                          <Badge variant="destructive" className="text-xs">Caractéristiques sol sans étude</Badge>
                          <Badge variant="destructive" className="text-xs">Vibrations mitoyenneté sans étude</Badge>
                          <Badge variant="destructive" className="text-xs">Véhicules soumis assurance obligatoire</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Limites de garantie</h4>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• <strong>Dommages tiers :</strong> 50% montant travaux (min 4M, max 40M DH)</li>
                            <li>• <strong>Dommages ouvrage :</strong> 4M DH</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Franchise</h4>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Dommages matériels : max 50.000 DH</li>
                            <li>• Dommages corporels : max 1.000 DH</li>
                            <li>• Non opposable aux tiers ni au maître d'ouvrage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Obligations contractuelles */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Obligations principales</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Déclarations à la souscription</h4>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Déclaration exacte de toutes circonstances connues</li>
                            <li>• Remise copie plans architecte et rapport étude sol</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">En cours de contrat</h4>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Déclaration aggravation risques (8 jours)</li>
                            <li>• Déclaration arrêt travaux &gt; 45 jours (15 jours)</li>
                            <li>• Arrêt définitif : résiliation de plein droit (15 jours)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Après achèvement</h4>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Date achèvement travaux (30 jours)</li>
                            <li>• Date réception + PV réception (30 jours)</li>
                            <li>• Montant définitif travaux (90 jours après réception)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">En cas de sinistre</h4>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Déclaration dans 5 jours (vol : 2 jours)</li>
                            <li>• Mesures sauvegarde immédiate</li>
                            <li>• Transmission documents (5 jours)</li>
                            <li>• Accord assureur avant réparation</li>
                            <li>• Conservation parties endommagées</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rcd" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">RC Décennale</Badge>
                Conditions générales - Responsabilité Civile Décennale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                <div className="space-y-6">
                  {/* Définitions */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Article 2 - Définitions</h3>
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Assuré</h4>
                        <p className="text-sm">Personne dont la responsabilité civile décennale peut être engagée en vertu de l'article 769 du DOC</p>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Gros œuvres</h4>
                        <p className="text-sm mb-2">Éléments porteurs concourant à la stabilité/solidité :</p>
                        <ul className="text-sm space-y-1">
                          <li>• Fondations, poteaux et murs porteurs</li>
                          <li>• Planchers, poutres, escaliers</li>
                          <li>• Charpentes, éléments de clos et couvert</li>
                          <li>• Éléments supportant charges permanentes et temporaires</li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Seconds œuvres</h4>
                        <p className="text-sm mb-2">Éléments autres que gros œuvre :</p>
                        <ul className="text-sm space-y-1">
                          <li>• Carrelages, faïences incorporés</li>
                          <li>• Canalisations, conduites de ventilation</li>
                          <li>• Plafonds, cloisons fixes, huisseries</li>
                          <li>• Structures fixes ascenseurs</li>
                          <li>• Équipements installations courantes</li>
                          <li>• Appareils thermiques, électriques, mécaniques</li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Matériaux/Méthodes nouveaux</h4>
                        <p className="text-sm">Non utilisés au Maroc durant les 5 années précédentes avec moins de 50 projets réalisés</p>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Garantie RC Décennale */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Garantie Responsabilité Civile Décennale</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Objet de la garantie (Article 3)</h4>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Responsabilité civile décennale selon article 769 DOC</li>
                            <li>• Frais de démolition/déblaiement suite à sinistre garanti</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Exclusions (Article 4)</h4>
                        <div className="grid gap-2">
                          <Badge variant="destructive" className="text-xs">Faute intentionnelle/dolosive</Badge>
                          <Badge variant="destructive" className="text-xs">Guerre/terrorisme/sabotage</Badge>
                          <Badge variant="destructive" className="text-xs">Non-respect réserves bureau contrôle</Badge>
                          <Badge variant="destructive" className="text-xs">Seconds œuvres sans écroulement</Badge>
                          <Badge variant="destructive" className="text-xs">Incendie/explosion (sauf conséquence)</Badge>
                          <Badge variant="destructive" className="text-xs">Catastrophes naturelles</Badge>
                          <Badge variant="destructive" className="text-xs">Risques atomiques/nucléaires</Badge>
                          <Badge variant="destructive" className="text-xs">Défaut entretien/usage anormal</Badge>
                          <Badge variant="destructive" className="text-xs">Dommages immatériels</Badge>
                          <Badge variant="destructive" className="text-xs">Conséquences engagement contractuel</Badge>
                          <Badge variant="destructive" className="text-xs">Économie abusive maître ouvrage</Badge>
                          <Badge variant="destructive" className="text-xs">Modification/surélévation ouvrage</Badge>
                          <Badge variant="destructive" className="text-xs">Mouvements sol exploitations minières</Badge>
                          <Badge variant="destructive" className="text-xs">Matériaux/méthodes nouveaux</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Limites de garantie (Article 6)</h4>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Montant travaux si &lt; 500M DH</li>
                            <li>• 500M DH si montant ≥ 500M DH</li>
                            <li>• Multi-ouvrages : somme (max 1 milliard DH)</li>
                            <li>• Frais démolition/déblaiement : min 1/10 du montant travaux</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Franchise (Article 7)</h4>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• % du montant dommages (max 7%)</li>
                            <li>• Montant forfaitaire :</li>
                            <li>&nbsp;&nbsp;- 50.000 DH si travaux &lt; 500M DH</li>
                            <li>&nbsp;&nbsp;- 100.000 DH si travaux ≥ 500M DH</li>
                            <li>• Maximum des deux montants ci-dessus</li>
                            <li>• <strong>Non opposable aux bénéficiaires</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Durée et effet */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Durée et prise d'effet (Article 8)</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Date d'effet</h4>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• <strong>Souscription avant réception :</strong> date de réception des travaux</li>
                            <li>• <strong>Souscription après réception :</strong> date de souscription</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Durée</h4>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• <strong>10 ans à compter de la réception des travaux</strong></li>
                            <li>• Si souscription tardive : de la souscription jusqu'à 10 ans après réception</li>
                            <li>• Durée rappelée en caractères apparents</li>
                            <li>• Sinon : résiliation annuelle possible (préavis 30 jours)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Obligations */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Obligations principales</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">À la souscription (Article 12)</h4>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Localisation et nature de l'ouvrage</li>
                            <li>• Modalités et moyens d'exécution</li>
                            <li>• Dates commencement/achèvement</li>
                            <li>• Montant travaux (provisoire ou définitif)</li>
                            <li>• Plans architecte, béton armé, étude sol</li>
                            <li>• Rapport technique bureau contrôle</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Après achèvement</h4>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Date achèvement travaux (30 jours)</li>
                            <li>• Date réception + PV réception (30 jours)</li>
                            <li>• Montant définitif travaux (90 jours après réception)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Défaut déclaration réception</h4>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Mise en demeure après 2 ans (délai 30 jours)</li>
                            <li>• Faculté de résiliation si non-déclaration</li>
                            <li>• Résiliation prend effet 10 jours après notification</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">En cas de sinistre (Article 14)</h4>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Déclaration dans 5 jours</li>
                            <li>• Transmission documents (5 jours)</li>
                            <li>• Déchéance si déclaration tardive (sauf force majeure)</li>
                            <li>• Déchéance non opposable aux bénéficiaires</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Règle proportionnelle */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Règle proportionnelle (Article 18)</h3>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Formule de calcul</h4>
                      <div className="text-sm space-y-2">
                        <p>• <strong>Si Sn ≤ MT × (1+0.05)ⁿ :</strong> règlement à valeur réelle Sn</p>
                        <p>• <strong>Sinon :</strong> règlement plafonné à MT × (1+0.05)ⁿ</p>
                        <div className="mt-3 text-xs">
                          <p><strong>Où :</strong></p>
                          <p>• n = numéro année sinistre (0 à 10)</p>
                          <p>• MT = montant travaux à la réception</p>
                          <p>• Sn = coût reconstruction à l'identique année n</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Separator />

                  {/* Contrôle technique */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Contrôle technique (Article 11)</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Missions minimum</h4>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Examen plans et cahier des charges</li>
                            <li>• Examen étude sol et fondations</li>
                            <li>• Contrôle exécution travaux</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Documents à remettre</h4>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <ul className="text-sm space-y-1">
                            <li>• Rapport technique initial</li>
                            <li>• Rapport final travaux</li>
                            <li>• Rapports mentionnant réserves/défauts</li>
                            <li>• Autres documents selon conditions particulières</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};